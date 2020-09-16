import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Azure Data Catalog.
 */
export declare class ADCCatalog extends pulumi.CustomResource {
    /**
     * Get an existing ADCCatalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADCCatalog;
    /**
     * Returns true if the given object is an instance of ADCCatalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ADCCatalog;
    /**
     * Azure data catalog admin list.
     */
    readonly admins: pulumi.Output<outputs.datacatalog.v20160330.PrincipalsResponse[] | undefined>;
    /**
     * Automatic unit adjustment enabled or not.
     */
    readonly enableAutomaticUnitAdjustment: pulumi.Output<boolean | undefined>;
    /**
     * Resource etag
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Azure data catalog SKU.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * Azure data catalog provision status.
     */
    readonly successfullyProvisioned: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Azure data catalog units.
     */
    readonly units: pulumi.Output<number | undefined>;
    /**
     * Azure data catalog user list.
     */
    readonly users: pulumi.Output<outputs.datacatalog.v20160330.PrincipalsResponse[] | undefined>;
    /**
     * Create a ADCCatalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADCCatalogArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ADCCatalog resource.
 */
export interface ADCCatalogArgs {
    /**
     * Azure data catalog admin list.
     */
    readonly admins?: pulumi.Input<pulumi.Input<inputs.datacatalog.v20160330.Principals>[]>;
    /**
     * The name of the data catalog in the specified subscription and resource group.
     */
    readonly catalogName: pulumi.Input<string>;
    /**
     * Automatic unit adjustment enabled or not.
     */
    readonly enableAutomaticUnitAdjustment?: pulumi.Input<boolean>;
    /**
     * Resource etag
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Azure data catalog SKU.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * Azure data catalog provision status.
     */
    readonly successfullyProvisioned?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Azure data catalog units.
     */
    readonly units?: pulumi.Input<number>;
    /**
     * Azure data catalog user list.
     */
    readonly users?: pulumi.Input<pulumi.Input<inputs.datacatalog.v20160330.Principals>[]>;
}
