

function onEdit() {


    var ss = SpreadsheetApp.getActiveSheet();
    var checkBox = ss.getActiveCell();
    var checkBoxVal = checkBox.getValues();


    if (ss.getName() == "BRANCH REQUEST 2019") { //checks that we're on the correct sheet



        if (checkBox.getColumn() == 13) { //checks the column
            var depositSlip = checkBox.offset(0, -8);
            var pullOutBy = checkBox.offset(0, 1);
            var pullOutDate = checkBox.offset(0, -1);


            if (checkBoxVal[0] == "true") {




                if (depositSlip.isBlank() == false && pullOutBy.isBlank() == false) {

                    pullOutDate.setValue(new Date());
                }

                else if (depositSlip.isBlank() == false && pullOutBy.isBlank() == true) {

                    checkBox.setValue(false);
                    Browser.msgBox("ERROR - Must enter initials");
                }

                else if (depositSlip.isBlank() == true && pullOutBy.isBlank() == false) {
                    checkBox.setValue(false);
                    Browser.msgBox("ERROR - Must enter deposit slip number");
                }

                else if (depositSlip.isBlank() == true && pullOutBy.isBlank() == true) {
                    checkBox.setValue(false);
                    Browser.msgBox("ERROR - Must enter deposit slip number and initials");
                }

            } else {

                pullOutDate.setValue("");
            }

        }
    }
}
