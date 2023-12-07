<?php
namespace SureCart\Controllers\Web;

use SureCart\Models\Form;

/**
 * Handles Product page requests for frontend.
 */
class ProductPageController extends BasePageController {
	/**
	 * Show the product page
	 *
	 * @param \SureCartCore\Requests\RequestInterface $request Request.
	 * @param \SureCartCore\View                      $view View.
	 *
	 * @return function|void
	 */
	public function show( $request, $view ) {
		// get the product from the query var.
		$id = get_query_var( 'sc_product_page_id' );

		// fetch the product by id/slug.
		$this->model = \SureCart\Models\Product::with( [ 'prices', 'image', 'variants', 'variant_options' ] )->find( $id );

		if ( is_wp_error( $this->model ) ) {
			return $this->handleError( $this->model );
		}

		// if this product is a draft, check read permissions.
		if ( 'draft' === $this->model->status && ! current_user_can( 'read_sc_products' ) ) {
			return $this->notFound();
		}

		// slug changed or we are using the id, redirect.
		if ( $this->model->slug !== $id ) {
			return \SureCart::redirect()->to( $this->model->permalink );
		}

		set_query_var( 'sc_product_page_id', $this->model->id );

		// add the filters.
		$this->filters();

		// handle block theme.
		if ( wp_is_block_theme() ) {
			global $_wp_current_template_content;
			$_wp_current_template_content = $this->model->template->content ?? '';
		}

		// include the default view.
		include $view;

		return \SureCart::response();
	}

	/**
	 * Handle filters.
	 *
	 * @return void
	 */
	public function filters(): void {
		parent::filters();

		// Add edit product link to admin bar.
		add_action( 'admin_bar_menu', [ $this, 'addEditProductLink' ], 99 );

		// add data needed for product to load.
		add_filter(
			'surecart-components/scData',
			function( $data ) {
				$form = \SureCart::forms()->getDefault();

				$data['product_data'] = [
					'product'       => $this->model,
					'form'          => $form,
					'mode'          => Form::getMode( $form->ID ),
					'checkout_link' => \SureCart::pages()->url( 'checkout' ),
				];

				return $data;
			}
		);
	}

	/**
	 * Add edit product link.
	 *
	 * @param \WP_Admin_Bar $wp_admin_bar Admin bar.
	 *
	 * @return void
	 */
	public function addEditProductLink( $wp_admin_bar ): void {
		$wp_admin_bar->add_node(
			[
				'id'    => 'edit-product',
				'title' => __( 'Edit Product', 'surecart' ),
				'href'  => esc_url( \SureCart::getUrl()->edit( 'product', $this->model->id ) ),
			]
		);
	}
}