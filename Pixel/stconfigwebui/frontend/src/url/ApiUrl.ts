 const rootUrl: string = "http://192.168.10.49:5000/"
// const rootUrl: string = ""
const imageList: string = rootUrl + "api/image/list"
const runFeed: string = rootUrl + "api/image/run_feed"
const annotationList: string = rootUrl + "api/annotation/list"
const saveAnnotations: string = rootUrl + "api/image/save_annotations"
const deleteAnnotations: string = rootUrl + "api/image/delete_annotations"
const deleteAllFiles: string = rootUrl + "api/image/delete_all_files"
const saveLabels: string = rootUrl + "api/annotation/save_labels"

export { rootUrl, imageList, runFeed, annotationList, saveAnnotations, saveLabels, deleteAnnotations, deleteAllFiles }