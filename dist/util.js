"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const post = (action, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`/${action}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const errorData = yield res.json();
            if (res.status === 401) {
                window.location.pathname = "/signout";
                window.location.reload();
                return undefined;
            }
            alert(`Oh no! You found an error!
  
Status: ${res.status}
Error Code: ${errorData.errorID}
Description: ${errorData.errorDesc}

If you believe this error should not have occurred, please report this as an issue. We recommend you screenshot this message and record the error code. Badavas is still in Beta, but we are doing our best to resolve any issues. Thank you for your patience :>`);
            return undefined;
        }
        // these actions return BLOBs
        const blobActions = new Set([]);
        return blobActions.has(action) ? res.blob() : res.json();
    }
    catch (err) {
        console.log(err);
    }
});
