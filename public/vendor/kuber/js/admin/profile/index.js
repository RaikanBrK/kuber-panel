const image=$("#campoImageProfile");function changePassword(e){let a=$("#changePassword"),n=$("#password"),o=$("#password_confirmation");e.prop("checked")?(n.val(""),o.val(""),a.removeClass("d-none")):a.addClass("d-none")}image.on("change",(e=>{let a=e.target;const n=new FileReader;n.onload=function(){var e=n.result;document.getElementById("imageProfile").src=e},a.files.length>0&&n.readAsDataURL(a.files[0]),e.preventDefault()})),$("#checkBoxChangePassword").on("change",(e=>{changePassword($(e.target))})),changePassword($("#checkBoxChangePassword"));