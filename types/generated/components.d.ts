import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pages';
  info: {
    description: '';
    displayName: 'homePage';
  };
  attributes: {
    heroSlider: Schema.Attribute.Component<'home.slider', true>;
    seo: Schema.Attribute.Component<'seo.seo-fields', false>;
  };
}

export interface HomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_sliders';
  info: {
    description: '';
    displayName: 'slider';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.Required;
    bgImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductKitItem extends Struct.ComponentSchema {
  collectionName: 'components_product_kit_items';
  info: {
    description: '';
    displayName: 'KitItem';
  };
  attributes: {
    item_description: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProductKitVariation extends Struct.ComponentSchema {
  collectionName: 'components_product_kit_variations';
  info: {
    description: '';
    displayName: 'KitVariation';
  };
  attributes: {
    kit_items: Schema.Attribute.Component<'product.kit-item', true>;
    ref_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductSimpleVariants extends Struct.ComponentSchema {
  collectionName: 'components_product_simple_variants';
  info: {
    displayName: 'simple variants';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    ref_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeoFields extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_fields';
  info: {
    displayName: 'SEO Fields';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    OGimg: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.home-page': HomeHomePage;
      'home.slider': HomeSlider;
      'product.kit-item': ProductKitItem;
      'product.kit-variation': ProductKitVariation;
      'product.simple-variants': ProductSimpleVariants;
      'seo.seo-fields': SeoSeoFields;
    }
  }
}
