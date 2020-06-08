
            // 1.scroll up Start
            
            mybutton = document.getElementById("myBtn");
            //when the user scroll down 20px from the top of the document,show the button
            window.onscroll = function() {scrollFunction()};
            function scrollFunction() {
                if (document.body.scrollTop > 100 ||  document.documentElement.scrollTop > 100)

                {mybutton.style.display = "block";}

                else{mybutton.style.display = "none";}
            }
            //when the user clicks on the button,scroll to the top of the document
            function topFunction() {
                document.body.scrollTop = 0; //for safari
                document.documentElement.scrollTop = 0; //for chrome, Firefox, IE & Opera
            }

            // 2.World data Fetching Start

            fetch('https://api.covid19api.com/summary')
            .then( (apidata) => {
                // console.log(apidata);
                return apidata.json();
            })

            .then( (actualdata) => {

                //Global Data

                const mydataG = actualdata.Global;
                const mydataU = actualdata.Date;

                document.getElementById('TC_G').innerHTML = 
                `${mydataG.TotalConfirmed}`;

                document.getElementById('TR_G').innerHTML = 
                `${mydataG.TotalRecovered}`;

                document.getElementById('TD_G').innerHTML = 
                `${mydataG.TotalDeaths}`;

                document.getElementById('NC_G').innerHTML = 
                `${mydataG.NewConfirmed}`;

                document.getElementById('NR_G').innerHTML = 
                `${mydataG.NewRecovered}`;

                document.getElementById('ND_G').innerHTML = 
                `${mydataG.NewDeaths}`;

                document.getElementById('LUT_G').innerHTML = 
                `${mydataU}`;

                // Country_wise Data

                const mydata = actualdata.Countries;

                mydata.sort(function(a,b){
                    return b.TotalConfirmed - a.TotalConfirmed;
                });

                //console.log(mydata);

                //1. 1st Country 

                const mydataC1 = mydata[0];

                document.getElementById('TC_C1').innerHTML = 
                `${mydataC1.TotalConfirmed}`;

                document.getElementById('TR_C1').innerHTML = 
                `${mydataC1.TotalRecovered}`;

                document.getElementById('TD_C1').innerHTML = 
                `${mydataC1.TotalDeaths}`;

                document.getElementById('NC_C1').innerHTML = 
                `${mydataC1.NewConfirmed}`;

                document.getElementById('NR_C1').innerHTML = 
                `${mydataC1.NewRecovered}`;

                document.getElementById('ND_C1').innerHTML = 
                `${mydataC1.NewDeaths}`;

                document.getElementById('SN_C1').innerHTML = 
                `${mydataC1.Country}`;

                document.getElementById('LUT_C1').innerHTML = 
                `${mydataC1.Date}`;


                //2. 2nd Country 

                const mydataC2 = mydata[1];

                document.getElementById('TC_C2').innerHTML = 
                `${mydataC2.TotalConfirmed}`;

                document.getElementById('TR_C2').innerHTML = 
                `${mydataC2.TotalRecovered}`;

                document.getElementById('TD_C2').innerHTML = 
                `${mydataC2.TotalDeaths}`;

                document.getElementById('NC_C2').innerHTML = 
                `${mydataC2.NewConfirmed}`;

                document.getElementById('NR_C2').innerHTML = 
                `${mydataC2.NewRecovered}`;

                document.getElementById('ND_C2').innerHTML = 
                `${mydataC2.NewDeaths}`;

                document.getElementById('SN_C2').innerHTML = 
                `${mydataC2.Country}`;

                document.getElementById('LUT_C2').innerHTML = 
                `${mydataC2.Date}`;


                //3. 3rd Country 

                const mydataC3 = mydata[2];

                document.getElementById('TC_C3').innerHTML = 
                `${mydataC3.TotalConfirmed}`;

                document.getElementById('TR_C3').innerHTML = 
                `${mydataC3.TotalRecovered}`;

                document.getElementById('TD_C3').innerHTML = 
                `${mydataC3.TotalDeaths}`;

                document.getElementById('NC_C3').innerHTML = 
                `${mydataC3.NewConfirmed}`;

                document.getElementById('NR_C3').innerHTML = 
                `${mydataC3.NewRecovered}`;

                document.getElementById('ND_C3').innerHTML = 
                `${mydataC3.NewDeaths}`;

                document.getElementById('SN_C3').innerHTML = 
                `${mydataC3.Country}`;

                document.getElementById('LUT_C3').innerHTML = 
                `${mydataC3.Date}`;


                //3. 3rd Country 

                const mydataC4 = mydata[3];

                document.getElementById('TC_C4').innerHTML = 
                `${mydataC4.TotalConfirmed}`;

                document.getElementById('TR_C4').innerHTML = 
                `${mydataC4.TotalRecovered}`;

                document.getElementById('TD_C4').innerHTML = 
                `${mydataC4.TotalDeaths}`;

                document.getElementById('NC_C4').innerHTML = 
                `${mydataC4.NewConfirmed}`;

                document.getElementById('NR_C4').innerHTML = 
                `${mydataC4.NewRecovered}`;

                document.getElementById('ND_C4').innerHTML = 
                `${mydataC4.NewDeaths}`;

                document.getElementById('SN_C4').innerHTML = 
                `${mydataC4.Country}`;

                document.getElementById('LUT_C4').innerHTML = 
                `${mydataC4.Date}`;


                //3. 3rd Country 

                const mydataC5 = mydata[4];

                document.getElementById('TC_C5').innerHTML = 
                `${mydataC5.TotalConfirmed}`;

                document.getElementById('TR_C5').innerHTML = 
                `${mydataC5.TotalRecovered}`;

                document.getElementById('TD_C5').innerHTML = 
                `${mydataC5.TotalDeaths}`;

                document.getElementById('NC_C5').innerHTML = 
                `${mydataC5.NewConfirmed}`;

                document.getElementById('NR_C5').innerHTML = 
                `${mydataC5.NewRecovered}`;

                document.getElementById('ND_C5').innerHTML = 
                `${mydataC5.NewDeaths}`;

                document.getElementById('SN_C5').innerHTML = 
                `${mydataC5.Country}`;

                document.getElementById('LUT_C5').innerHTML = 
                `${mydataC5.Date}`;


                //3. 3rd Country 

                const mydataC6 = mydata[5];

                document.getElementById('TC_C6').innerHTML = 
                `${mydataC6.TotalConfirmed}`;

                document.getElementById('TR_C6').innerHTML = 
                `${mydataC6.TotalRecovered}`;

                document.getElementById('TD_C6').innerHTML = 
                `${mydataC6.TotalDeaths}`;

                document.getElementById('NC_C6').innerHTML = 
                `${mydataC6.NewConfirmed}`;

                document.getElementById('NR_C6').innerHTML = 
                `${mydataC6.NewRecovered}`;

                document.getElementById('ND_C6').innerHTML = 
                `${mydataC6.NewDeaths}`;

                document.getElementById('SN_C6').innerHTML = 
                `${mydataC6.Country}`;

                document.getElementById('LUT_C6').innerHTML = 
                `${mydataC6.Date}`;


                //3. 3rd Country 

                const mydataC7 = mydata[6];

                document.getElementById('TC_C7').innerHTML = 
                `${mydataC7.TotalConfirmed}`;

                document.getElementById('TR_C7').innerHTML = 
                `${mydataC7.TotalRecovered}`;

                document.getElementById('TD_C7').innerHTML = 
                `${mydataC7.TotalDeaths}`;

                document.getElementById('NC_C7').innerHTML = 
                `${mydataC7.NewConfirmed}`;

                document.getElementById('NR_C7').innerHTML = 
                `${mydataC7.NewRecovered}`;

                document.getElementById('ND_C7').innerHTML = 
                `${mydataC7.NewDeaths}`;

                document.getElementById('SN_C7').innerHTML = 
                `${mydataC7.Country}`;

                document.getElementById('LUT_C7').innerHTML = 
                `${mydataC7.Date}`;


                //3. 3rd Country 

                const mydataC8 = mydata[7];

                document.getElementById('TC_C8').innerHTML = 
                `${mydataC8.TotalConfirmed}`;

                document.getElementById('TR_C8').innerHTML = 
                `${mydataC8.TotalRecovered}`;

                document.getElementById('TD_C8').innerHTML = 
                `${mydataC8.TotalDeaths}`;

                document.getElementById('NC_C8').innerHTML = 
                `${mydataC8.NewConfirmed}`;

                document.getElementById('NR_C8').innerHTML = 
                `${mydataC8.NewRecovered}`;

                document.getElementById('ND_C8').innerHTML = 
                `${mydataC8.NewDeaths}`;

                document.getElementById('SN_C8').innerHTML = 
                `${mydataC8.Country}`;

                document.getElementById('LUT_C8').innerHTML = 
                `${mydataC8.Date}`;


                //3. 3rd Country 

                const mydataC9 = mydata[8];

                document.getElementById('TC_C9').innerHTML = 
                `${mydataC9.TotalConfirmed}`;

                document.getElementById('TR_C9').innerHTML = 
                `${mydataC9.TotalRecovered}`;

                document.getElementById('TD_C9').innerHTML = 
                `${mydataC9.TotalDeaths}`;

                document.getElementById('NC_C9').innerHTML = 
                `${mydataC9.NewConfirmed}`;

                document.getElementById('NR_C9').innerHTML = 
                `${mydataC9.NewRecovered}`;

                document.getElementById('ND_C9').innerHTML = 
                `${mydataC9.NewDeaths}`;

                document.getElementById('SN_C9').innerHTML = 
                `${mydataC9.Country}`;

                document.getElementById('LUT_C9').innerHTML = 
                `${mydataC9.Date}`;


                //3. 3rd Country 

                const mydataC10 = mydata[9];

                document.getElementById('TC_C10').innerHTML = 
                `${mydataC10.TotalConfirmed}`;

                document.getElementById('TR_C10').innerHTML = 
                `${mydataC10.TotalRecovered}`;

                document.getElementById('TD_C10').innerHTML = 
                `${mydataC10.TotalDeaths}`;

                document.getElementById('NC_C10').innerHTML = 
                `${mydataC10.NewConfirmed}`;

                document.getElementById('NR_C10').innerHTML = 
                `${mydataC10.NewRecovered}`;

                document.getElementById('ND_C10').innerHTML = 
                `${mydataC10.NewDeaths}`;

                document.getElementById('SN_C10').innerHTML = 
                `${mydataC10.Country}`;

                document.getElementById('LUT_C10').innerHTML = 
                `${mydataC10.Date}`;


                //3. 3rd Country 

                const mydataC11 = mydata[10];

                document.getElementById('TC_C11').innerHTML = 
                `${mydataC11.TotalConfirmed}`;

                document.getElementById('TR_C11').innerHTML = 
                `${mydataC11.TotalRecovered}`;

                document.getElementById('TD_C11').innerHTML = 
                `${mydataC11.TotalDeaths}`;

                document.getElementById('NC_C11').innerHTML = 
                `${mydataC11.NewConfirmed}`;

                document.getElementById('NR_C11').innerHTML = 
                `${mydataC11.NewRecovered}`;

                document.getElementById('ND_C11').innerHTML = 
                `${mydataC11.NewDeaths}`;

                document.getElementById('SN_C11').innerHTML = 
                `${mydataC11.Country}`;

                document.getElementById('LUT_C11').innerHTML = 
                `${mydataC11.Date}`;


                //3. 3rd Country 

                const mydataC12 = mydata[11];

                document.getElementById('TC_C12').innerHTML = 
                `${mydataC12.TotalConfirmed}`;

                document.getElementById('TR_C12').innerHTML = 
                `${mydataC12.TotalRecovered}`;

                document.getElementById('TD_C12').innerHTML = 
                `${mydataC12.TotalDeaths}`;

                document.getElementById('NC_C12').innerHTML = 
                `${mydataC12.NewConfirmed}`;

                document.getElementById('NR_C12').innerHTML = 
                `${mydataC12.NewRecovered}`;

                document.getElementById('ND_C12').innerHTML = 
                `${mydataC12.NewDeaths}`;

                document.getElementById('SN_C12').innerHTML = 
                `${mydataC12.Country}`;

                document.getElementById('LUT_C12').innerHTML = 
                `${mydataC12.Date}`;


                //3. 3rd Country 

                const mydataC13 = mydata[12];

                document.getElementById('TC_C13').innerHTML = 
                `${mydataC13.TotalConfirmed}`;

                document.getElementById('TR_C13').innerHTML = 
                `${mydataC13.TotalRecovered}`;

                document.getElementById('TD_C13').innerHTML = 
                `${mydataC13.TotalDeaths}`;

                document.getElementById('NC_C13').innerHTML = 
                `${mydataC13.NewConfirmed}`;

                document.getElementById('NR_C13').innerHTML = 
                `${mydataC13.NewRecovered}`;

                document.getElementById('ND_C13').innerHTML = 
                `${mydataC13.NewDeaths}`;

                document.getElementById('SN_C13').innerHTML = 
                `${mydataC13.Country}`;

                document.getElementById('LUT_C13').innerHTML = 
                `${mydataC13.Date}`;


                //3. 3rd Country 

                const mydataC14 = mydata[13];

                document.getElementById('TC_C14').innerHTML = 
                `${mydataC14.TotalConfirmed}`;

                document.getElementById('TR_C14').innerHTML = 
                `${mydataC14.TotalRecovered}`;

                document.getElementById('TD_C14').innerHTML = 
                `${mydataC14.TotalDeaths}`;

                document.getElementById('NC_C14').innerHTML = 
                `${mydataC14.NewConfirmed}`;

                document.getElementById('NR_C14').innerHTML = 
                `${mydataC14.NewRecovered}`;

                document.getElementById('ND_C14').innerHTML = 
                `${mydataC14.NewDeaths}`;

                document.getElementById('SN_C14').innerHTML = 
                `${mydataC14.Country}`;

                document.getElementById('LUT_C14').innerHTML = 
                `${mydataC14.Date}`;


                //3. 3rd Country 

                const mydataC15 = mydata[14];

                document.getElementById('TC_C15').innerHTML = 
                `${mydataC15.TotalConfirmed}`;

                document.getElementById('TR_C15').innerHTML = 
                `${mydataC15.TotalRecovered}`;

                document.getElementById('TD_C15').innerHTML = 
                `${mydataC15.TotalDeaths}`;

                document.getElementById('NC_C15').innerHTML = 
                `${mydataC15.NewConfirmed}`;

                document.getElementById('NR_C15').innerHTML = 
                `${mydataC15.NewRecovered}`;

                document.getElementById('ND_C15').innerHTML = 
                `${mydataC15.NewDeaths}`;

                document.getElementById('SN_C15').innerHTML = 
                `${mydataC15.Country}`;

                document.getElementById('LUT_C15').innerHTML = 
                `${mydataC15.Date}`;

                
            })

            .catch( (error) => {
                console.log(`The Error: ${error}`);
            });


            // 3.India data Fetching Start

            fetch('https://api.covid19india.org/data.json')
            .then( (apidata) => {
                // console.log(apidata);
                return apidata.json();
            })

            .then( (actualdata) => {
                 // console.log(actualdata)
                const mydataI = actualdata.statewise[0];

                document.getElementById('TC_I').innerHTML = 
                `${mydataI.confirmed}`;

                document.getElementById('TR_I').innerHTML = 
                `${mydataI.recovered}`;

                document.getElementById('TD_I').innerHTML = 
                `${mydataI.deaths}`;

                document.getElementById('NC_I').innerHTML = 
                `${mydataI.deltaconfirmed}`;

                document.getElementById('NR_I').innerHTML = 
                `${mydataI.deltarecovered}`;

                document.getElementById('ND_I').innerHTML = 
                `${mydataI.deltadeaths}`;

                document.getElementById('LUT_I').innerHTML = 
                `${mydataI.lastupdatedtime}`;


                // 1....Mumbai

                const mydataI1 = actualdata.statewise[1];

                document.getElementById('TC_I1').innerHTML = 
                `${mydataI1.confirmed}`;

                document.getElementById('TR_I1').innerHTML = 
                `${mydataI1.recovered}`;

                document.getElementById('TD_I1').innerHTML = 
                `${mydataI1.deaths}`;

                document.getElementById('NC_I1').innerHTML = 
                `${mydataI1.deltaconfirmed}`;

                document.getElementById('NR_I1').innerHTML = 
                `${mydataI1.deltarecovered}`;

                document.getElementById('ND_I1').innerHTML = 
                `${mydataI1.deltadeaths}`;

                document.getElementById('LUT_I1').innerHTML = 
                `${mydataI1.lastupdatedtime}`;

                document.getElementById('SN_I1').innerHTML = 
                `${mydataI1.state}`;


                // 2....Gujarat

                const mydataI2 = actualdata.statewise[2];

                document.getElementById('TC_I2').innerHTML = 
                `${mydataI2.confirmed}`;

                document.getElementById('TR_I2').innerHTML = 
                `${mydataI2.recovered}`;

                document.getElementById('TD_I2').innerHTML = 
                `${mydataI2.deaths}`;

                document.getElementById('NC_I2').innerHTML = 
                `${mydataI2.deltaconfirmed}`;

                document.getElementById('NR_I2').innerHTML = 
                `${mydataI2.deltarecovered}`;

                document.getElementById('ND_I2').innerHTML = 
                `${mydataI2.deltadeaths}`;

                document.getElementById('LUT_I2').innerHTML = 
                `${mydataI2.lastupdatedtime}`;

                document.getElementById('SN_I2').innerHTML = 
                `${mydataI2.state}`;

                // 3....Gujarat

                const mydataI3 = actualdata.statewise[3];

                document.getElementById('TC_I3').innerHTML = 
                `${mydataI3.confirmed}`;

                document.getElementById('TR_I3').innerHTML = 
                `${mydataI3.recovered}`;

                document.getElementById('TD_I3').innerHTML = 
                `${mydataI3.deaths}`;

                document.getElementById('NC_I3').innerHTML = 
                `${mydataI3.deltaconfirmed}`;

                document.getElementById('NR_I3').innerHTML = 
                `${mydataI3.deltarecovered}`;

                document.getElementById('ND_I3').innerHTML = 
                `${mydataI3.deltadeaths}`;

                document.getElementById('LUT_I3').innerHTML = 
                `${mydataI3.lastupdatedtime}`;

                document.getElementById('SN_I3').innerHTML = 
                `${mydataI3.state}`;


                // 4....Gujarat

                const mydataI4 = actualdata.statewise[4];

                document.getElementById('TC_I4').innerHTML = 
                `${mydataI4.confirmed}`;

                document.getElementById('TR_I4').innerHTML = 
                `${mydataI4.recovered}`;

                document.getElementById('TD_I4').innerHTML = 
                `${mydataI4.deaths}`;

                document.getElementById('NC_I4').innerHTML = 
                `${mydataI4.deltaconfirmed}`;

                document.getElementById('NR_I4').innerHTML = 
                `${mydataI4.deltarecovered}`;

                document.getElementById('ND_I4').innerHTML = 
                `${mydataI4.deltadeaths}`;

                document.getElementById('LUT_I4').innerHTML = 
                `${mydataI4.lastupdatedtime}`;

                document.getElementById('SN_I4').innerHTML = 
                `${mydataI4.state}`;


                // 5....Gujarat

                const mydataI5 = actualdata.statewise[5];

                document.getElementById('TC_I5').innerHTML = 
                `${mydataI5.confirmed}`;

                document.getElementById('TR_I5').innerHTML = 
                `${mydataI5.recovered}`;

                document.getElementById('TD_I5').innerHTML = 
                `${mydataI5.deaths}`;

                document.getElementById('NC_I5').innerHTML = 
                `${mydataI5.deltaconfirmed}`;

                document.getElementById('NR_I5').innerHTML = 
                `${mydataI5.deltarecovered}`;

                document.getElementById('ND_I5').innerHTML = 
                `${mydataI5.deltadeaths}`;

                document.getElementById('LUT_I5').innerHTML = 
                `${mydataI5.lastupdatedtime}`;

                document.getElementById('SN_I5').innerHTML = 
                `${mydataI5.state}`;



                // 6....Gujarat

                const mydataI6 = actualdata.statewise[6];

                document.getElementById('TC_I6').innerHTML = 
                `${mydataI6.confirmed}`;

                document.getElementById('TR_I6').innerHTML = 
                `${mydataI6.recovered}`;

                document.getElementById('TD_I6').innerHTML = 
                `${mydataI6.deaths}`;

                document.getElementById('NC_I6').innerHTML = 
                `${mydataI6.deltaconfirmed}`;

                document.getElementById('NR_I6').innerHTML = 
                `${mydataI6.deltarecovered}`;

                document.getElementById('ND_I6').innerHTML = 
                `${mydataI6.deltadeaths}`;

                document.getElementById('LUT_I6').innerHTML = 
                `${mydataI6.lastupdatedtime}`;

                document.getElementById('SN_I6').innerHTML = 
                `${mydataI6.state}`;


                // 7....Gujarat

                const mydataI7 = actualdata.statewise[7];

                document.getElementById('TC_I7').innerHTML = 
                `${mydataI7.confirmed}`;

                document.getElementById('TR_I7').innerHTML = 
                `${mydataI7.recovered}`;

                document.getElementById('TD_I7').innerHTML = 
                `${mydataI7.deaths}`;

                document.getElementById('NC_I7').innerHTML = 
                `${mydataI7.deltaconfirmed}`;

                document.getElementById('NR_I7').innerHTML = 
                `${mydataI7.deltarecovered}`;

                document.getElementById('ND_I7').innerHTML = 
                `${mydataI7.deltadeaths}`;

                document.getElementById('LUT_I7').innerHTML = 
                `${mydataI7.lastupdatedtime}`;

                document.getElementById('SN_I7').innerHTML = 
                `${mydataI7.state}`;


                // 8....Gujarat

                const mydataI8 = actualdata.statewise[8];

                document.getElementById('TC_I8').innerHTML = 
                `${mydataI8.confirmed}`;

                document.getElementById('TR_I8').innerHTML = 
                `${mydataI8.recovered}`;

                document.getElementById('TD_I8').innerHTML = 
                `${mydataI8.deaths}`;

                document.getElementById('NC_I8').innerHTML = 
                `${mydataI8.deltaconfirmed}`;

                document.getElementById('NR_I8').innerHTML = 
                `${mydataI8.deltarecovered}`;

                document.getElementById('ND_I8').innerHTML = 
                `${mydataI8.deltadeaths}`;

                document.getElementById('LUT_I8').innerHTML = 
                `${mydataI8.lastupdatedtime}`;

                document.getElementById('SN_I8').innerHTML = 
                `${mydataI8.state}`;


                // 9....Gujarat

                const mydataI9 = actualdata.statewise[9];

                document.getElementById('TC_I9').innerHTML = 
                `${mydataI9.confirmed}`;

                document.getElementById('TR_I9').innerHTML = 
                `${mydataI9.recovered}`;

                document.getElementById('TD_I9').innerHTML = 
                `${mydataI9.deaths}`;

                document.getElementById('NC_I9').innerHTML = 
                `${mydataI9.deltaconfirmed}`;

                document.getElementById('NR_I9').innerHTML = 
                `${mydataI9.deltarecovered}`;

                document.getElementById('ND_I9').innerHTML = 
                `${mydataI9.deltadeaths}`;

                document.getElementById('LUT_I9').innerHTML = 
                `${mydataI9.lastupdatedtime}`;

                document.getElementById('SN_I9').innerHTML = 
                `${mydataI9.state}`;


                // 10....Gujarat

                const mydataI10 = actualdata.statewise[10];

                document.getElementById('TC_I10').innerHTML = 
                `${mydataI10.confirmed}`;

                document.getElementById('TR_I10').innerHTML = 
                `${mydataI10.recovered}`;

                document.getElementById('TD_I10').innerHTML = 
                `${mydataI10.deaths}`;

                document.getElementById('NC_I10').innerHTML = 
                `${mydataI10.deltaconfirmed}`;

                document.getElementById('NR_I10').innerHTML = 
                `${mydataI10.deltarecovered}`;

                document.getElementById('ND_I10').innerHTML = 
                `${mydataI10.deltadeaths}`;

                document.getElementById('LUT_I10').innerHTML = 
                `${mydataI10.lastupdatedtime}`;

                document.getElementById('SN_I10').innerHTML = 
                `${mydataI10.state}`;


                // 11....Gujarat

                const mydataI11 = actualdata.statewise[11];

                document.getElementById('TC_I11').innerHTML = 
                `${mydataI11.confirmed}`;

                document.getElementById('TR_I11').innerHTML = 
                `${mydataI11.recovered}`;

                document.getElementById('TD_I11').innerHTML = 
                `${mydataI11.deaths}`;

                document.getElementById('NC_I11').innerHTML = 
                `${mydataI11.deltaconfirmed}`;

                document.getElementById('NR_I11').innerHTML = 
                `${mydataI11.deltarecovered}`;

                document.getElementById('ND_I11').innerHTML = 
                `${mydataI11.deltadeaths}`;

                document.getElementById('LUT_I11').innerHTML = 
                `${mydataI11.lastupdatedtime}`;

                document.getElementById('SN_I11').innerHTML = 
                `${mydataI11.state}`;


                // 12....Gujarat

                const mydataI12 = actualdata.statewise[12];

                document.getElementById('TC_I12').innerHTML = 
                `${mydataI12.confirmed}`;

                document.getElementById('TR_I12').innerHTML = 
                `${mydataI12.recovered}`;

                document.getElementById('TD_I12').innerHTML = 
                `${mydataI12.deaths}`;

                document.getElementById('NC_I12').innerHTML = 
                `${mydataI12.deltaconfirmed}`;

                document.getElementById('NR_I12').innerHTML = 
                `${mydataI12.deltarecovered}`;

                document.getElementById('ND_I12').innerHTML = 
                `${mydataI12.deltadeaths}`;

                document.getElementById('LUT_I12').innerHTML = 
                `${mydataI12.lastupdatedtime}`;

                document.getElementById('SN_I12').innerHTML = 
                `${mydataI12.state}`;


                const mydataI13 = actualdata.statewise[13];

                document.getElementById('TC_I13').innerHTML = 
                `${mydataI13.confirmed}`;

                document.getElementById('TR_I13').innerHTML = 
                `${mydataI13.recovered}`;

                document.getElementById('TD_I13').innerHTML = 
                `${mydataI13.deaths}`;

                document.getElementById('NC_I13').innerHTML = 
                `${mydataI13.deltaconfirmed}`;

                document.getElementById('NR_I13').innerHTML = 
                `${mydataI13.deltarecovered}`;

                document.getElementById('ND_I13').innerHTML = 
                `${mydataI13.deltadeaths}`;

                document.getElementById('LUT_I13').innerHTML = 
                `${mydataI13.lastupdatedtime}`;

                document.getElementById('SN_I13').innerHTML = 
                `${mydataI13.state}`;


                const mydataI14 = actualdata.statewise[14];

                document.getElementById('TC_I14').innerHTML = 
                `${mydataI14.confirmed}`;

                document.getElementById('TR_I14').innerHTML = 
                `${mydataI14.recovered}`;

                document.getElementById('TD_I14').innerHTML = 
                `${mydataI14.deaths}`;

                document.getElementById('NC_I14').innerHTML = 
                `${mydataI14.deltaconfirmed}`;

                document.getElementById('NR_I14').innerHTML = 
                `${mydataI14.deltarecovered}`;

                document.getElementById('ND_I14').innerHTML = 
                `${mydataI14.deltadeaths}`;

                document.getElementById('LUT_I14').innerHTML = 
                `${mydataI14.lastupdatedtime}`;

                document.getElementById('SN_I14').innerHTML = 
                `${mydataI14.state}`;


                const mydataI15 = actualdata.statewise[15];

                document.getElementById('TC_I15').innerHTML = 
                `${mydataI15.confirmed}`;

                document.getElementById('TR_I15').innerHTML = 
                `${mydataI15.recovered}`;

                document.getElementById('TD_I15').innerHTML = 
                `${mydataI15.deaths}`;

                document.getElementById('NC_I15').innerHTML = 
                `${mydataI15.deltaconfirmed}`;

                document.getElementById('NR_I15').innerHTML = 
                `${mydataI15.deltarecovered}`;

                document.getElementById('ND_I15').innerHTML = 
                `${mydataI15.deltadeaths}`;

                document.getElementById('LUT_I15').innerHTML = 
                `${mydataI15.lastupdatedtime}`;

                document.getElementById('SN_I15').innerHTML = 
                `${mydataI15.state}`;


               
            })

            .catch( (error) => {
                console.log(`The Error: ${error}`);
            });
        