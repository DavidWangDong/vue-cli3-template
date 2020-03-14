const title = '七天网络'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}_${title}`
  }
  return `${title}`
}
