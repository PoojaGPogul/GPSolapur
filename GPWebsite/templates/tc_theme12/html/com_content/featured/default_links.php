<?php
defined('_JEXEC') or die;
?>
<div class="items-more table-responsive">
	<table class="table">
    <thead><tr><th><?php echo JText::_('COM_CONTENT_MORE_ARTICLES'); ?></th></tr></thead>
<?php foreach ($this->link_items as &$item) : ?>
	<tr><td>
		<a href="<?php echo JRoute::_(ContentHelperRoute::getArticleRoute($item->slug, $item->catslug)); ?>">
			<?php echo $item->title; ?></a>
	</td></tr>
<?php endforeach; ?>
	</table>
</div>