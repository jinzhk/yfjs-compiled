(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// English (en)
    plupload.addI18n({
        "Stop Upload": "Stop Upload",
        "Upload URL might be wrong or doesn't exist.": "Upload URL might be wrong or doesn't exist.",
        "tb": "tb",
        "Size": "Size",
        "Close": "Close",
        "Init error.": "Init error.",
        "Add files to the upload queue and click the start button.": "Add files to the upload queue and click the start button.",
        "Filename": "Filename",
        "Image format either wrong or not supported.": "Image format either wrong or not supported.",
        "Status": "Status",
        "HTTP Error.": "HTTP Error.",
        "Start Upload": "Start Upload",
        "mb": "mb",
        "kb": "kb",
        "Duplicate file error.": "Duplicate file error.",
        "File size error.": "File size error.",
        "N/A": "N/A",
        "gb": "gb",
        "Error: Invalid file extension:": "Error: Invalid file extension:",
        "Select files": "Select files",
        "%s already present in the queue.": "%s already present in the queue.",
        "File: %s": "File: %s",
        "b": "b",
        "Uploaded %d/%d files": "Uploaded %d/%d files",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload element accepts only %d file(s) at a time. Extra files were stripped.",
        "%d files queued": "%d files queued",
        "File: %s, size: %d, max file size: %d": "File: %s, size: %d, max file size: %d",
        "Drag files here.": "Drag files here.",
        "Runtime ran out of available memory.": "Runtime ran out of available memory.",
        "File count error.": "File count error.",
        "File extension error.": "File extension error.",
        "Error: File too large:": "Error: File too large:",
        "Add Files": "Add Files"
    });

}));