import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#050506',
          padding: 76,
          color: '#f4f4f5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 22, height: 22, background: '#f4f4f5', borderRadius: 4 }} />
          <div style={{ fontSize: 34, letterSpacing: 6, fontWeight: 700 }}>NUVEX</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -4, fontWeight: 600 }}>
            Tecnología que
          </div>
          <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -4, color: '#b9bac1', fontWeight: 600 }}>
            impulsa negocios.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#a1a1a8' }}>
          Custom Software · Digital Experiences · AI Solutions
        </div>
      </div>
    ),
    size,
  )
}
