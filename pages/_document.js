import Document, { Html, Head, Main, NextScript } from 'next/document'

const publicPrefix = process.env.NODE_ENV === 'development' ? '' : 'https://a.stacker.news'
class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel='preload' href={`${publicPrefix}/Lightningvolt-xoqm.ttf`} as='font' type='font/ttf' crossOrigin='' />
          <style
            dangerouslySetInnerHTML={{
              __html:
            ` @font-face {
                font-family: lightning;
                src: url(${publicPrefix}/Lightningvolt-xoqm.ttf);
              }`
            }}
          />
        </Head>
        <body>
          <script src='/darkmode.js' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
