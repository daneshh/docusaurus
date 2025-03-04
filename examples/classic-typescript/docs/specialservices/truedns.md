---
sidebar_position: 1
---

# سرویس TrueDNS


سرویس **TrueDNS** باعث میشود تا سیستم شما تمامی **Domain** ها را با آی پی واقعی آن ها شناسایی کند. به طور پیش فرض و به دلایل فنی درخواست های مربوط به **DNS** و پورت 53 رمز نگاری نمی شوند و به راحتی در طول مسیر توسط دیتاسنتر ها قابل تغییر هستند و همین امر باعث بوجود آمدن بسیاری از مشکلات امنیتی برای کاربران می شود.
با متصل شدن به سرویس **TrueDNS** تمامی درخواست های **DNS** که از طریق سیستم شما ارسال شده، رمزنگاری شده و از سرور های **[EZPing](https://ezping.ir/)** عبور میکند و دامنه های درخواست شده توسط دستگاه شما به صورت صحیح و بدون دستکاری **resolve** میشوند.

یکی از نیازمندی های اصلی نرم افزار **[EZPing](https://ezping.ir/)** برای عملیات رفع تحریم، **TrueDNS** می باشد و هر بازی را که در لیست خود قرار دهید، این سرویس نیز به طور پیش فرض و اتوماتیک کانکت خواهد شد، اما در صورتی که صرفا قصد استفاده از این سرویس را دارید میتوانید آن را به تنهایی انتخاب کنید.


**استفاده از سرویس DNS ایزی پینگ هیچ گونه محدودیت زمانی و حجمی نداشته و برای تمامی کاربران به صورت عمومی و رایگان قابل استفاده است.**

# آیا سرویس DNS ایزی پینگ یک سرویس دی ان اس رفع تحریم است؟


خیر، این سرویس مانند بقیه **DNS** های رفع تحریم رایج شده در ایران، عمل نمی کند و نخواهد کرد. چرا که استفاده از سرویس های ذکر شده و مشابه باعث میشود تا سیستم شما به سمت IP اصلی دامنه های درخواستی هدایت نشده و اطلاعات شما از مسیری که نباید عبور کند. گردانندگان این سرویس ها به صورت یک واسط میانی ( man-in-the-middle ) بین دستگاه شما و سرور اصلی که قصد ارتباط با آن را دارید عمل میکنند و به دلیل نحوه کارکرد تکنولوژی **DNS**، هیچگونه عملیات رمز نگاری بر روی درخواست های **DNS** اعمال نمی شود و تمامی اطلاعات رمز نگاری نشده شما قابل مشاهده است.

برای مثال اگر شما قصد ورود به سایت **بانک ملی** را داشته باشید و این سایت در لیست این **DNS** ها قرار داشته باشد، سیستم شما به جای سرور و آی پی اصلی بانک ملی، به یک سرور دیگر اطلاعات شما را ارسال می کند و هیچ تضمینی وجود ندارد که شما همواره با سرور اصلی سایتی که قصد مشاهده آن را دارید در ارتباط باشید. این امر در واقع یکی از راه های معروف و اصلی فیشینگ و هک است که با اصطلاح **DNS Hijacking** شناخته می شود.

[**لینک ویکی پدیا را در این مورد مطالعه فرمایید**](https://en.wikipedia.org/wiki/DNS_hijacking).

**سرویس EZPing به نهایت امنیت و حفظ حریم شخصی کاربران خود پایبند بوده و هیچگاه سرویس های مشابه را راه اندازی نخواهد کرد مگر با ایجاد بستری کاملن امن و شفاف.**

**استفاده از سرویس DNS ایزی پینگ به هیچ وجه باعث رفع فیلترینگ اعمال شده از داخل نشده و با قوانین ما مغایرتی ندارد و صرفا جهت رفع تحریم های خارجی عمل می کند.**
