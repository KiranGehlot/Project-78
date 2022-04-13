var images = ["blob:https://web.whatsapp.com/cdb91bd4-00bd-48df-9505-57d80a623a81","blob:https://web.whatsapp.com/27481797-2ac8-428c-b366-a331f6d8f71b", "blob:https://web.whatsapp.com/7e11941b-a9be-4451-af32-44bf7ab561e9" , "blob:https://web.whatsapp.com/e88a322b-2592-473f-a176-50c5ebc3bde4", "blob:https://web.whatsapp.com/11f36ec1-99e8-4a96-9350-1127fb7dbbbc", "blob:https://web.whatsapp.com/100d3c25-d0c4-44af-b466-861fd04617ed"];
var names = ["Suresh Gehlot","Guddi Gehlot", "Jyoti Gehlot", "Premlata Gehlot", "Kiran Gehlot", "Khushveer Gehlot"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
