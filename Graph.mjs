
export function drawGraph(gID, years,yearPopData, Eqn1, Eqn2){
    const canvas = document.getElementById(gID);
    const ctx = canvas.getContext("2d");
    
    const width = canvas.width;
    const height = canvas.height;
    
    const distFromTop = 50;
    const distFromBottom = 100;
    const maxHeight = height - distFromTop - distFromBottom;
    const widthFromLeft = 75;
    
    
    const distBetweenDots = (width-widthFromLeft*2)/(yearPopData.length-1);
    
    var max = 0;
    
    for (var i = 0; i < yearPopData.length; i++){
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
    
    for (var i = 1; i < yearPopData.length; i++){
      drawLine(widthFromLeft + (i-1)*distBetweenDots, i)  
    }
    
    // Draw the stuff for the first dot
    ctx.fillText(years[0], widthFromLeft, distFromTop + maxHeight + 20)
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
    
    
    
    
    // SECOND LINE
    
    
    
    
    
    
    for (var i = 1; i < yearPopData.length; i++){
      drawLine2(widthFromLeft + (i-1)*distBetweenDots, i)  
    }
    
    // Draw the stuff for the first dot
    ctx.fillText(years[0], widthFromLeft, distFromTop + maxHeight + 20)
    //Draw a little circle on the data point
    ctx.fillStyle = "#000000";
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
        ctx.fillText(parts*i, widthFromLeft - 5, h+8);
        h = h- 50;
        i++;
        
    }
    

}