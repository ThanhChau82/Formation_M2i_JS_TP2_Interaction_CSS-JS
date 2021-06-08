function handleInputStyling(error, inputDomRef, iconDomRef) {
  if (error) {
    inputDomRef.style.border = "1px solid red";
    iconDomRef.className += "fas fa-exclamation-circle";
    iconDomRef.style.color = "red";
    iconDomRef.style.opacity = "1";
  } else {
    inputDomRef.style.border = "1px solid black";
    iconDomRef.className += "fas fa-check-circle";
    iconDomRef.style.color = "green";
    iconDomRef.style.opacity = "1";
  }
}
