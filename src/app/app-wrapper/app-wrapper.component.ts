import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visibleOnResponsive: boolean = false;

  showSidebarOnResponsive() {
    this.visibleOnResponsive = true;
  }

  hideSidebarOnResponsive() {
    this.visibleOnResponsive = false;
  }

  markCurrentRouteInSidebar() {
    const currentRoute = window.location.pathname;
    console.log(currentRoute);
    if (currentRoute == "/app/board") {
      document.getElementById("boardSidebar")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("boardSidebar")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlogSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("helpSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settingsSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTaskSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlogSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("helpSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settingsSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTaskSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("board")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("board")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlog")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("help")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settings")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTask")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlog")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("help")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settings")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTask")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
    } else if (currentRoute == "/app/backlog") {
      document.getElementById("backlogSidebar")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("backlogSidebar")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("boardSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("helpSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settingsSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTaskSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("boardSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("helpSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settingsSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTaskSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlog")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("backlog")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("board")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("help")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settings")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTask")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("board")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("help")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settings")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTask")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
    } else if (currentRoute == "/app/settings") {
      document.getElementById("settingsSidebar")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("settingsSidebar")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlogSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("helpSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("boardSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTaskSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlogSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("helpSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("boardSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTaskSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settings")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("settings")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlog")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("help")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("board")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTask")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlog")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("help")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("board")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTask")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");

    } else if (currentRoute == "/app/add-task") {
      document.getElementById("addTaskSidebar")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("addTaskSidebar")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlogSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("helpSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settingsSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("boardSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlogSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("helpSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settingsSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("boardSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTask")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("addTask")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlog")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("help")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settings")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("board")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlog")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("help")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settings")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("board")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");

    } else if (currentRoute == "/app/help") {
      document.getElementById("helpSidebar")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("helpSidebar")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlogSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("boardSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settingsSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTaskSidebar")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlogSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("boardSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settingsSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTaskSidebar")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("help")?.classList.add("bg-indigo-700", "text-white");
      document.getElementById("help")?.classList.remove("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("backlog")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("board")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("settings")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("addTask")?.classList.remove("bg-indigo-700", "text-white");
      document.getElementById("backlog")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("board")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("settings")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
      document.getElementById("addTask")?.classList.add("text-indigo-200", "hover:text-white", "hover:bg-indigo-700");
    }
    if (currentRoute && this.visibleOnResponsive) {
      console.log("sidebar is open")
      setTimeout(() => {
        this.hideSidebarOnResponsive()
      }, 1000);
    }
  }

  //Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->


}
