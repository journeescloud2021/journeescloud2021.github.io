import { SortByPipe } from "../sort-by.pipe";

import { HomeComponent } from "./home/home.component";
import { ProgramDemoComponent } from "./programdemo/programdemo.component";
import { StaticComponent } from "./static/static.component";

export const containers = [
    HomeComponent,
    StaticComponent,
    SortByPipe,
    ProgramDemoComponent,
];

export * from "./home/home.component";
export * from "./static/static.component";
export * from "./programdemo/programdemo.component";

/* export * from "./surveydemo/surveydemo.component";
export * from "./about/about.component";
export * from "./publications/publications.component";
export * from "./dynamic-md/dynamic-md.component";
export * from "./blog/blog.component";
export * from "./blogs/blogs.component";
 */
