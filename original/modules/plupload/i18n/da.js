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

// Danish (da)
    plupload.addI18n({
        "Stop Upload": "Stop upload",
        "Upload URL might be wrong or doesn't exist.": "Upload URL kan være forkert eller ikke eksisterende.",
        "tb": "tb",
        "Size": "Størrelse",
        "Close": "Luk",
        "Init error.": "Opstarts fejl.",
        "Add files to the upload queue and click the start button.": "Tilføj filer til køen og klik Start upload knappen.",
        "Filename": "Filnavn",
        "Image format either wrong or not supported.": "Billede format er enten forkert eller ikke understøttet.",
        "Status": "Status",
        "HTTP Error.": "HTTP fejl.",
        "Start Upload": "Start upload",
        "mb": "mb",
        "kb": "kb",
        "Duplicate file error.": "Filen findes allerede.",
        "File size error.": "Filstørrelse fejl.",
        "N/A": "N/A",
        "gb": "gb",
        "Error: Invalid file extension:": "Fejl: Ugyldigt fil format:",
        "Select files": "Vælg filer",
        "%s already present in the queue.": "%s findes allerede i køen.",
        "File: %s": "Fil: %s",
        "b": "b",
        "Uploaded %d/%d files": "Uploaded %d/%d filer",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload accepterer kun %d fil(er) af gangen. Ekstra filer blev skippet.",
        "%d files queued": "%d filer i kø",
        "File: %s, size: %d, max file size: %d": "Fil: %s, størrelse: %d, maks. filstørrelse: %d",
        "Drag files here.": "Træk filer her.",
        "Runtime ran out of available memory.": "Runtime mangler tilgængelige hukommelse.",
        "File count error.": "Fil antal fejl.",
        "File extension error.": "Fil format fejl.",
        "Error: File too large:": "Fejl: Filen er for stor:",
        "Add Files": "Tilføj filer"
    });

}));