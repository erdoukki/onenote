const multiActions = (data) => {
    const webview = global.p3x.onenote.webview;

    switch (data.action) {
        /*
                    case 'focus-save':
        //console.log('focus-save')
                        webview.getWebContents().executeJavaScript(`window.p3xOnenoteActiveElement = document.activeElement; window.p3xIframe = document.getElementById('sdx_ow_iframe'); window.p3xIframeDoc = window.p3xIframe.contentDocument || window.p3xIframe.contentWindow.document; console.log(window.p3xIframeDoc.activeElement);`)
                        break;
        */
        case 'focus':
//                webview.openDevTools();
            if (webview !== undefined) {
                webview.focus()
                /*
                webview.getWebContents().executeJavaScript(`var a = 'foo'; Promise.resolve(a);`).then(result => {
                    console.log(result)
                }).catch(e => console.error(e))
                */
                //webview.getWebContents().executeJavaScript(`console.log(window.p3xOnenoteActiveElement)`)

                //document.activeElement
            }
            break;


        case 'restart':
            const session = webview.getWebContents().session;
            session.clearStorageData(() => {
                //console.log('storage cleared');
                webview.reload();
            })
            break;

        case 'home':
            webview.src = 'https://www.onenote.com/notebooks'
            break;

        case 'corporate':
            webview.src = 'https://www.onenote.com/notebooks?auth=2&auth_upn=my_corporate_email_address'
            break;

        case 'get-location':
            require('./multi-action/get-location')()
            break;

        case 'toast':
            require('./multi-action/toast')(data)
            break;
    }
}

module.exports = multiActions;