import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Devin Chase | Interior Designer</title>
          <meta charset="UTF-8" />
          <meta name="language" content="en" />
          <meta name="description" content="Interior Designer and Artist." />
          <meta name="keywords" content="interior design, Artist, PhotoShop, Illustrator" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:300|Open+Sans"
            rel="stylesheet"
          />
          <link href="/static/styles/index.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
