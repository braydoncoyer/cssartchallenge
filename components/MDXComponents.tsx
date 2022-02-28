import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
/* eslint-disable react/display-name */
import React, { useMemo } from 'react'

import { BlogNewsletterForm } from './NewsletterForm'
import CustomLink from './Link'
import Image from './Image'
import Pre from './Pre'
import { SubmitArtButton } from './SubmitArtButton'
import TOCInline from './TOCInline'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
  SubmitArtButton,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
