const include = {
    head : {
        meta :function () {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        },
        styles : {
            common : function () {
                document.write('<link rel="stylesheet" href="assets/css/reset.css">');
                document.write('<link rel="stylesheet" href="assets/css/common.css">');
                document.write('<link rel="stylesheet" href="assets/css/layout.css">');
            }
        }
    },
    footer: {
        scripts : function(){
            document.write('<script src="assets/js/template/header.js"></script>');
            document.write('<script src="assets/js/template/footer.js"></script>');
            document.write('<script src="assets/js/ui-front.js"></script>');
        }
    }
}

include.head.meta();
include.head.styles.common();