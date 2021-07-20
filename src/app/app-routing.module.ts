import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("@app/mulder/mulder-routing.module").then(
                (m) => m.BlogRoutingModule
            ),
    },
    {
        path: "error",
        loadChildren: () =>
            import("app/error/error-routing.module").then(
                (m) => m.ErrorRoutingModule
            ),
    },
    {
        path: "**",
        pathMatch: "full",
        loadChildren: () =>
            import("app/error/error-routing.module").then(
                (m) => m.ErrorRoutingModule
            ),
    },
];

// then just import your RouterModule with these options

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
