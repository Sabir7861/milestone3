var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('Submit', function (event) { });
{
    Event.PreventDefault();
    var nameelement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phoneelement = document.getElementById('phone');
    var educationelement = document.getElementById('education');
    var experiancelement = document.getElementById('experiance');
    var skillselement = document.getElementById('skills');
    if (nameelement && emailelement && phoneelement && educationelement && experiancelement && skillselement)
        var name_1 = nameelement.value;
    var email = emailelement.value;
    var phone = phoneelement.value;
    var education = educationelement.value;
    var experiance = experiancelement.value;
    var skills = skillselement.value;
    var resumeoutput;
    resume < /h2>
        < p > Name;
    /> $(name) </p >
        email;
    /> $(email) </p >
        phone;
    /> $(phone) </p >
        education < /h3>
        < p > $;
    {
        education;
    }
    /P>
        < p > $;
    {
        experiance;
    }
    /P>
        < p > $;
    {
        skills;
    }
    /P>;
    var resumeoutputelement = document.getElementById('resumeoutput');
    if (resumeoutputelement) {
        resumeoutputelement.innerHTML = resumeoutput;
    }
    else {
        console.error('the resumeoutputelements are missings');
    }
}
{
    console.error('one or more output element are missing');
    {
    }
}
