Food - OnlineShop

## Name
DA CRUST

## Description
This is a Food Shop with Online Order and Delivery. The site has an active nav bar with home page, menu, online order, admin and contact.

Visuals


Project status
Done


-Description
-la click pe "Contact" din navbar sa se adauge clasa "selected" si sa se stearga de pe celelalte elemente
-pe pagina Home:    - am activ navbar
                    - am activ buton "order online" (de 3 ori)
                    - am activ buton 'full menu'
                    - am activ buton 'submit'
    -navbar:    -home
                -menu(la click deschide pagina menu.html )
                -order-online(la click deschide pagina order-online.html )
                -admin(la click deschide pagina admin.html )
                -contact(la click te duce la contact in josul paginii (smooth scrolling) )
    -css animation la numele site-ului(span+hover)
    -css animation la butoanele active(hover)
    -css shadow la font-awesome instructions
    -css opacity la unele poze-link(hover)
    -css animation pe social media icons(hover)
    -click pe social media icons links
    -click pe submit
-pe pagina Menu:    -lista produselor
                    -metoda AJAX fetch API (firebase) cu fisierul json local
-pe pagina Order Online:    -la click pe iconita Hi, guest apare un promt sa te loghezi cu facebookul cum???????
                            -drop down Menu list hide/show
                            -la fiecare click pe o categorie se afiseaza respectiva lista meniu
                            -la fiecare meal am buton de 'add to cart' (link cu id-ul elementului respectiv)
                            -la click pe un 'add to cart' apare acel produs in CART cu: -nume meal
                                                                            -price
                                                                            -quantity cu plus minus(se updateaza cantitatea, pretul si produsele din cos)
                                                                            -buton de remove
                            -dupa ce s-a pregatit comanda, click pe "Order now": - apare o alerta, si comanda dispare(simulare de comanda)
                            -comanda salvata in local storage(produse, cantitate(doar pt primele 2 inputuri) si total pret)
-pe pagina Details  -apare reteta produsului cu poza si nume
                    -un buton de 'back to menu'
-pe pagina Admin:   -am lista tuturor produselor
                    -buton 'add new meal' pt a adauga un produs nou in json cu POST
                    - produsului este link ce editeaza produsul in json cu PUT
                    -buton de 'remove' pt a sterge din JSON cu DELETE
-la Contact     -simulez un submit cu mesaj "thanks for submitting"
                -mesaj de completare inputs
-este responsive pt mobil(500px), tableta(501px-768px), laptop S(769px - 1024px) si laptop L(1025px - 1440px)
-page loader pentru menu page(onload and View recipe), order online page(fiecare click pe categorie) si pentru Admin page(onload, add new meal, edit meal)
