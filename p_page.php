<?php 
/* 
Template Name:超级排版插件专用模板
Template Name Posts:超级排版插件专用模板
*/ 
get_header();
$id =get_the_ID(); 
?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="canuxtheme_full_content">
<?php the_content(); ?>
</div>
<?php endwhile; endif;?>
<?php get_footer();?>