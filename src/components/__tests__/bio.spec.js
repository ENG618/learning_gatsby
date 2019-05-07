import React from "react"
import { render } from "react-testing-library"
import { StaticQuery } from "gatsby" // mocked

import Bio from "../bio"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      avatar: {
        childImageSharp: {
          fixed: {
            width: 50,
            height: 50,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
      site: {
        siteMetadata: {
          author: `me`,
          social: {
            twitter: `twitter_handle`,
          },
        },
      },
    })
  )
})

describe("Bio", () => {
  it("renders correctly", () => {
    const tree = render(<Bio />)
    expect(tree).toMatchSnapshot()
  })
})
