let viz, workbook, activeSheet

function initializeViz() {
    let placeholderDiv = document.getElementById("tableauViz");
    let url = "https://public.tableau.com/views/TestWordCloudMovies/Dashboard1?:embed=y&:display_count=yes&:origin=viz_share_link";
    let options = {
    //   width: placeholderDiv.offsetWidth,
    //   height: placeholderDiv.offsetHeight,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () { 
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}



window.addEventListener('load', initializeViz)
