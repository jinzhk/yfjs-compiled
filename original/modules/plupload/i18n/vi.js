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

// Vietnamese (vi)
    plupload.addI18n({
        "Stop Upload": "Dừng",
        "Upload URL might be wrong or doesn't exist.": "Đường dẫn URL tải lên không đúng hoặc không tồn tại.",
        "tb": "TB",
        "Size": "Dung lượng",
        "Close": "Đóng",
        "Init error.": "Lỗi khởi tạo",
        "Add files to the upload queue and click the start button.": "Thêm tập tin để tải lên và bấm vào nút bắt đầu",
        "Filename": "Tên tập tin",
        "Image format either wrong or not supported.": "Địng dạng hình ảnh không đúng hoặc không được hỗ trợ.",
        "Status": "Trạng thái",
        "HTTP Error.": "Lỗi HTTP",
        "Start Upload": "Bắt đầu",
        "mb": "MB",
        "kb": "KB",
        "Duplicate file error.": "Tập tin đã tồn tại",
        "File size error.": "Lỗi dung lượng tập tin",
        "N/A": "Chưa có thông tin",
        "gb": "GB",
        "Error: Invalid file extension:": "Lỗi: Định dạng tập tin không xác định:",
        "Select files": "Chọn tập tin",
        "%s already present in the queue.": "%s đã có trong danh sách chờ tải lên",
        "File: %s": "Tập tin: %s",
        "b": "B",
        "Uploaded %d/%d files": "Đã tải lên %d/%d tập tin",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Chỉ có thể tải lên (%d) tập tin cùng một lúc. Những tập tin còn lại đã bị huỷ bỏ.",
        "%d files queued": "%d tập tin trong danh sách chờ",
        "File: %s, size: %d, max file size: %d": "Tập tin: %s, dung lượng %d, dung lượng tối đa: %d",
        "Drag files here.": "Ném vào đây",
        "Runtime ran out of available memory.": "Thời gian chạy vượt quá giới hạn bộ nhớ cho phép.",
        "File count error.": "Lỗi đếm tập tin",
        "File extension error.": "Lỗi định dạng tập tin",
        "Error: File too large:": "Lỗi: Dung lượng tập tin quá lớn:",
        "Add Files": "Thêm tập tin"
    });

}));