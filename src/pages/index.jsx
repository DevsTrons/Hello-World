import LangPage from '@/components/LangPage'
import Page from '@/components/Page'
import { useEffectOnce } from '@curiosbasant/react-compooks'
import { useState } from 'react'

const contentFetcher = async (...args) => {
  const response = await fetch('/api/getRandomLangCode')
  return response.json()
}

export default function HomePage() {
  const [payload, setPayload] = useState(null)
  useEffectOnce(() => {
    loadNewContent()
  })
  async function loadNewContent() {
    setPayload(null)
    const response = await contentFetcher()
    setPayload({ content: response.data.content, ...response.data.data })
  }

  return (
    <Page title="Home">
      <LangPage payload={payload}>
        <button
          className="rounded-md bg-slate-50 px-4 py-2 text-slate-700 hover:bg-slate-200 disabled:text-slate-500"
          onClick={loadNewContent}
          disabled={!payload}
          type="button">
          Load New
        </button>
      </LangPage>
    </Page>
  )
}

