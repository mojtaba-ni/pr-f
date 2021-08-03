$(function () {
    $('.js-sweetalert button').on('click', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
        else if (type === 'with-title') {
            showWithTitleMessage();
        }
        else if (type === 'success') {
            showSuccessMessage();
        }
        else if (type === 'confirm') {
            showConfirmMessage();
        }
        else if (type === 'html-message') {
            showHtmlMessage();
        }
        else if (type === 'autoclose-timer') {
            showAutoCloseTimerMessage();
        }
        else if (type === 'we-set-buttons') {
            showWeSet3Buttons();
        }
        else if (type === 'AJAX-requests') {
            showAJAXrequests();
        }
        else if (type === 'DOM-content') {
            showDOMContent();
        }
    });
});

//These codes takes from http://t4t5.github.io/sweetalert/

function showBasicMessage() {
    swal("سلام دنیا!");
}
function showWithTitleMessage() {
    swal("در اینجا یک پیام است!", "این خیلی خوبه یا نه؟");
}
function showSuccessMessage() {
    swal("آفرین!", "شما دکمه را کلیک کرده اید!", "success");    
}
function showConfirmMessage() {
    swal({
        title: "شما مطمئن هستید؟",
        text: "پس از حذف شدن، نمیتوانید این فایل تخیلی را بازیابی کنید!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("پوف! فایل خیالی شما حذف شده است!", {
            icon: "success",
          });
        } else {
          swal("فایل خیالی شما امن است!");
        }
    });
}
function showHtmlMessage() {
    swal({
        title: "عنوان <small>HTML</small>!",
        text: "یک پیام <span style=\"color: #CC0000\">html<span> سفارشی.",
        html: true
    });
}
function showAutoCloseTimerMessage() {
    swal({
        title: "هشدار خودکار!",
        text: "من در عرض 2 ثانیه بسته خواهم شد.",
        timer: 2000,
        showConfirmButton: false
    });
}
function showWeSet3Buttons() {
    swal("پیکاچو وحشی ظاهر شد! چه کاری می خواهید انجام دهید؟", {
        buttons: {
        cancel: "فرار کن!",
        catch: {
            text: "پرتاب توپ !",
            value: "catch",
        },
        defeat: true,
        },
    })
    .then((value) => {
        switch (value) {
    
        case "defeat":
            swal("Pikachu ناپدید شد! شما 500 XP دریافت کردید!");
            break;
    
        case "catch":
            swal("گوچا!", "Pikachu گرفتار شد!", "success");
            break;
    
        default:
            swal("با خیال راحت بیرون بریز!");
        }
    });
}
function showAJAXrequests() {
    swal({
        text: 'جستجو برای یک فیلم. مثل "لا لا لند".',
        content: "input",
        button: {
        text: "جستجو!",
        closeModal: false,
        },
    })
    .then(name => {
        if (!name) throw null;
    
        return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
    })
    .then(results => {
        return results.json();
    })
    .then(json => {
        const movie = json.results[0];
    
        if (!movie) {
        return swal("هیچ فیلم پیدا نشد!");
        }
    
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
    
        swal({
        title: "نتیجه بالا:",
        text: name,
        icon: imageURL,
        });
    })
    .catch(err => {
        if (err) {
        swal("آه نه!", "درخواست AJAX ناموفق بود!", "error");
        } else {
        swal.stopLoading();
        swal.close();
        }
    });
}
function showDOMContent() {
    swal("نوشتن چیزی در اینجا:", {
        content: "input",
    })
    .then((value) => {
        swal(`تو تایپ کردی: ${value}`);
    });
}
