var selectedRow = null;

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
        document.getElementById("formfill").style.display="none";
    
}
function add()
{
    document.getElementById("formfill").style.display="block";
    resetForm();
}
function cancel()
{
    resetForm();
    document.getElementById("formfill").style.display="none";
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = table.rows.length;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)"><i class="fas fa-edit"  style="color: #1a75ff;"></i></a>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fas fa-trash-alt"  style="color: #ff073a;"></i></a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    selectedRow = null;
}

function onEdit(td) {
    document.getElementById("formfill").style.display="block";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.name;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
        var i=row.rowIndex;
        document.getElementById("list").deleteRow(row.rowIndex);
        var table = document.getElementById("list");
   
        var n=table.rows.length;
        for(var k=i;i<=n;k++)
        {
            var row = table.rows[k];
            row.cells[0].innerHTML=k;
            
        }
        resetForm();
}
