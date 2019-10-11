import domtoimage from 'dom-to-image'
import './styles.css'

document.getElementById('download').addEventListener('click', () => {
  domtoimage
    .toPng(document.getElementById('export'))
    .then(function(dataUrl) {
      const link = document.createElement('a')

      link.download = 'export.jpeg'
      link.href = dataUrl
      link.click()
    })
    .catch(function(error) {
      console.error('oops, something went wrong!', error)
    })
})
