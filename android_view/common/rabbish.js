        .then(
            function(response){
                if(response.status == 200){
                    response.text();
                }else{
                    alert("fail");
                }
            }
        )
                fetch(urlNew)
        .then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
        })
        .catch((error)=>{
            alert("error");
        })

        <ScrollView style={AllCss.scrollCon} showsVerticalScrollIndicator = {false}>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                </ScrollView>