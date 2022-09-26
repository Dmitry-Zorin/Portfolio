import dynamic from 'next/dynamic'

const PDFViewerDynamic = dynamic(import('components/PDFViewer'), { ssr: false })

export default PDFViewerDynamic
