//Does this do stuff??

export const years = [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060];

export const yearPopData = [332639,334998,337342,339665,341963,344234,346481,348695,350872,353008,355101,357147,359147,361099,363003,364862,366676,368448,370179,371871,373528,375152,376746,378314,379861,381390,382907,384415,385918,387419,388922,390431,391947,393473,395009,396557,398118,399691,401277,402874,404483];



export function drawGraph(gID, howLong, Eqn1, Eqn2){

    howLong += 1;
    
    const canvas = document.getElementById(gID);
    const ctx = canvas.getContext("2d");
    
    const width = canvas.width;
    const height = canvas.height;
    
    const distFromTop = 50;
    const distFromBottom = 100;
    const maxHeight = height - distFromTop - distFromBottom;
    const widthFromLeft = 75;
    
    
    const distBetweenDots = (width-widthFromLeft*2)/(howLong-1);
    
    var max = 0;
    
    for (var i = 0; i < howLong; i++){
        if (max < Eqn1(yearPopData[i])){
            max = Eqn1(yearPopData[i]);
        }
        if (max < Eqn2(yearPopData[i])){
            max = Eqn2(yearPopData[i]);
        }
    }

    
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, width, height);
    
    
    ctx.strokeStyle = "#000000";
    
    ctx.beginPath();
    ctx.moveTo(widthFromLeft,distFromTop);
    ctx.lineTo(widthFromLeft,distFromTop+maxHeight);
    ctx.lineTo(widthFromLeft + width-2*widthFromLeft, distFromTop + maxHeight);
    ctx.stroke();
    
    for (var i = 1; i < howLong; i++){
      drawLine(widthFromLeft + (i-1)*distBetweenDots, i)  
    }
    
    // Draw the stuff for the first dot
    //Draw a little circle on the data point
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(widthFromLeft, maxHeight-(Eqn1(yearPopData[0])/max*maxHeight) + distFromTop,3, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    
    
    function drawLine(start, index){
        const numOld = Eqn1(yearPopData[index-1])
        const numNew = Eqn1(yearPopData[index]);
        
        const barHeightNew = (numNew/max)*maxHeight;
        const barHeightOld = (numOld/max)*maxHeight;
        

        
        
        //Draw a little circle on the data point
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(start + distBetweenDots, maxHeight-barHeightNew + distFromTop,3, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // Draw the line from the last dot to this one
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(start,height- distFromBottom - barHeightOld);
        ctx.lineTo(start+distBetweenDots, height - distFromBottom - barHeightNew);
        ctx.stroke();
        
    }
    
    
    
    
    // SECOND LINE
    
    
    
    
    
    
    for (var i = 1; i < howLong; i++){
      drawLine2(widthFromLeft + (i-1)*distBetweenDots, i)  
    }
    
    ctx.fillStyle = "black";
    // Draw the stuff for the first dot
    ctx.fillText(years[0], widthFromLeft, distFromTop + maxHeight + 20)
    //Draw a little circle on the data point
    ctx.fillStyle = "#8B0000";
    ctx.beginPath();
    ctx.arc(widthFromLeft, maxHeight-(Eqn2(yearPopData[0])/max*maxHeight) + distFromTop,3, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    
    
    function drawLine2(start, index){
        const numOld = Eqn2(yearPopData[index-1])
        const numNew = Eqn2(yearPopData[index]);
        
        const barHeightNew = (numNew/max)*maxHeight;
        const barHeightOld = (numOld/max)*maxHeight;
        

        
        
        //Draw a little circle on the data point
        ctx.fillStyle = "#8B0000";
        ctx.beginPath();
        ctx.arc(start + distBetweenDots, maxHeight-barHeightNew + distFromTop,3, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // Draw the line from the last dot to this one
        ctx.strokeStyle = "#8B0000";
        ctx.beginPath();
        ctx.moveTo(start,height- distFromBottom - barHeightOld);
        ctx.lineTo(start+distBetweenDots, height - distFromBottom - barHeightNew);
        ctx.stroke();
        
        // Only do these every 5 years if 20 or more years are in the data
        
        if(howLong < 20 || index%5 == 0){
            // Draw the faded background lines
            ctx.strokeStyle = "#D3D3D3";
            ctx.beginPath();
            ctx.moveTo(start + distBetweenDots, height - distFromBottom);
            ctx.lineTo(start + distBetweenDots, distFromTop);
            ctx.stroke();
        
            // Add date on x axis
            ctx.font = "12px serif";
            ctx.fillStyle = "#000000"
            ctx.fillText(years[index], widthFromLeft + index*distBetweenDots - 5, distFromTop + maxHeight + 20);
        }
    }
    
    
    
    // Markup the y axis
    // max is the highest it goes
    
    // It will mark every 50 pixels or so
    
    var h = height - distFromBottom;
    var i = 0;
    
    const parts = Math.round(max/(maxHeight/50));
    
    while(h >= distFromTop){
    
        // Draw the faded background lines
        ctx.strokeStyle = "#D3D3D3";
        ctx.beginPath();
        ctx.moveTo(widthFromLeft, h+2);
        ctx.lineTo(width-widthFromLeft, h+2);
        ctx.stroke();
    
    
    
        // Add on y axis
        
        ctx.textAlign = "right";
        ctx.font = "12px serif";
        ctx.fillStyle = "#000000"
        ctx.fillText((parts*i).toLocaleString(), widthFromLeft - 5, h+8);
        h = h- 50;
        i++;
        
    }
    
    // Axis Descriptors
    
    ctx.textAlign = "center";
    ctx.fint = "24px serif";
    
    ctx.save();
    //ctx.translate(100,300);
    ctx.rotate(-0.5*Math.PI);

    ctx.fillText("Number of People (In Thousands)" , -3.75/8*height, widthFromLeft/4);
    ctx.restore();
    
    ctx.fillText("Year",width/2, height-distFromBottom/2);
    

}