import request from "@/utils/request"
const icode = 'C2CE489D152F6DD7'

export function wordColud() {
    return request({
        url: "/screen/wordcloud",
        method: "get",
        params:{
            icode:icode
        }
    })
}