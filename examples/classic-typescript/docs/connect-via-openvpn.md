---
sidebar_position: 10
---

# اتصال با OpenVPN


در راستای حفظ امنیت آنلاین کاربران، **[ایزی پینگ](https://ezping.ir/)** شرایطی را فراهم کرده تا افرادی که مایل به نصب و استفاده از نرم افزار اختصاصی **EZPing** نیستند نیز بتوانند از خدمات ما بهره ببرند.

اگر شما به دلایل امنیتی مایل به نصب نرم افزار **EZPing** نیستید، می توانید با دانلود و نصب نرم افزار **[OpenVPN](https://openvpn.net/)** یا **[OpenVPN Connect](https://openvpn.net/client/client-connect-vpn-for-windows/)** از منابع رسمی، به سرور های ایزی پینگ متصل شوید و از خدمات ما استفاده کنید. 
این نرم افزار ها به صورت متن-باز بوده و زیر ساخت اصلی سرور های ما از این پلتفرم استفاده می کنند، به همین خاطر امکان برقراری ارتباط با سرور های ما از طریق آن امکان پذیر است.

**توجه داشته باشید که نرم افزار ایزی پینگ هیچ تاثیری بر روی فیلترینگ اعمال شده از داخل کشور نداشته و برای عبور از فیلترینگ نیست.**

# آموزش نحوه اتصال به EZPing با OpenVPN: 

بدین منظور پس از دانلود و نصب برنامه از لینک های رسمی، **[فایل کانفیگ EZPing](https://ir.ezping.ir/downloads/cfg.ovpn)**، که یک فایل کانفیگ OpenVPN با پسوند `ovpn.` است، را دانلود و آن را در برنامه OpenVPN وارد ( import ) کنید. 

برای وارد کردن فایل کانفیگ در برنامه **OpenVPN GUI** ابتدا برنامه را اجرا کرده ( برنامه به صورت یک پروسه بکگراند در کنار ساعت ویندوز نمایان می شود ) و سپس روی آیکن برنامه کنار ساعت کلیک راست کرده و گزینه ی "import" و سپس "import file" را بزنید و فایل کانفیگی که دانلود کردید را انتخاب کنید.

![winver-run](./img/cfgimporting.png)
![winver-run](./img/cfgsuccessfulimport.png)


پس از ایمپورت کردن فایل کانفیگ، روی آیکن برنامه کلیک راست کرده و گزینه ی **Connect** را بزنید. سپس در پنجره باز شده اطلاعات خود را وارد کنید.

در قسمت Username: نام کاربری اکانت خود را وارد کنید و بعد از آن علامت **@** را قرار داده و سپس نام سرویسی که میخواهید به آن متصل شوید را بنویسید. این فهرست را می توانید از لینک زیر دریافت کنید.
[`https://ir.ezping.ir/downloads/list.txt`](https://ir.ezping.ir/downloads/list.txt)

در قسمت Password: رمز عبور اکانت خود را وارد کنید.

و برای به خاطر سپردن اطلاعات وارد شده تیک گزینه ی "Save Password" را فعال کنید.


در مثال زیر فرض بر این است که نام کاربری شما **42489** بوده و میخواهید به سرویس **Discord** متصل شوید.

![winver-run](./img/openvpcredentials.png)


پس از وارد کردن اطلاعات گزینه ی **OK** را بزنید و منتظر باشید تا اتصال برقرار شود. بعد از برقراری اتصال، صفحه برنامه به طور خودکار بسته می شود. آیکن پایین سمت راست برنامه در کنار ساعت سیستم به رنگ سبز تغییر می کند که نمایانگر متصل بودن سرویس است.

![winver-run](./img/openvpnconnected.png)



**اتصال به بیش از یک سرویس ( تا سقف سه سرویس همزمان ) در صورتی که اکانت شما از نوع پلن VIP یا Pro باشد، امکان پذیر است. بدین منظور شما باید برای اتصال به هر سرویس، با استفاده از OpenVPN یک TAP Adapter بسازید.**

**دقت کنید که این روش اتصال نمی تواند برای حالت Pro استفاده شود چرا که حالت پرو مختص EZPing بوده و نیازمند اجرای نرم افزار اختصاصی ایزی پینگ است.**
