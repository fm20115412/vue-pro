/**
 * Created by fm on 2017/6/2.
 */
import AV from "./leancloud"
export default function (user) {
  var {id,attributes:{username}}=user||AV.User.current()||{attributes:{}}
  return {
    id: id || "",
    username: username || ""
  }
}
