function checkTextLengthReturnMessage(textRaw, minLength, maxLength) {
  let result = "";
  let lengthRealText = textRaw.trim().length;
  if (maxLength && lengthRealText > maxLength) {
    result = `Yêu cầu tối đa ${maxLength} ký tự`;
  }
  if (minLength && realText < minLength) {
    result = `Yêu cầu tối thiểu ${maxLength} ký tự`;
  }
}

export {checkTextLengthReturnMessage};