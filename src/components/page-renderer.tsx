import React from 'react';
import Category from './category';
import Article from './article';

export type PageRendererProps = {
  type: 'category' | 'post';
  data: any;
};

export default function PageRenderer(dataParams: any) {
  switch (dataParams?.type) {
    case 'category':
      return <Category {...dataParams} />;
    case 'post':
      return <Article {...dataParams} />;
    default:
      return <div>Unknown content type</div>;
  }
}