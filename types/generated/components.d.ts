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
      'seo.seo-fields': SeoSeoFields;
    }
  }
}
