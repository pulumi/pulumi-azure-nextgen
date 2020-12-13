// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Schema for MSIX Package properties.
 */
export class MSIXPackage extends pulumi.CustomResource {
    /**
     * Get an existing MSIXPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MSIXPackage {
        return new MSIXPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:desktopvirtualization/v20201110preview:MSIXPackage';

    /**
     * Returns true if the given object is an instance of MSIXPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MSIXPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MSIXPackage.__pulumiType;
    }

    /**
     * User friendly Name to be displayed in the portal. 
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * VHD/CIM image path on Network Share.
     */
    public readonly imagePath!: pulumi.Output<string | undefined>;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies how to register Package in feed.
     */
    public readonly isRegularRegistration!: pulumi.Output<boolean | undefined>;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    public readonly lastUpdated!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of package applications. 
     */
    public readonly packageApplications!: pulumi.Output<outputs.desktopvirtualization.v20201110preview.MsixPackageApplicationsResponse[] | undefined>;
    /**
     * List of package dependencies. 
     */
    public readonly packageDependencies!: pulumi.Output<outputs.desktopvirtualization.v20201110preview.MsixPackageDependenciesResponse[] | undefined>;
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    public readonly packageFamilyName!: pulumi.Output<string | undefined>;
    /**
     * Package Name from appxmanifest.xml. 
     */
    public readonly packageName!: pulumi.Output<string | undefined>;
    /**
     * Relative Path to the package inside the image. 
     */
    public readonly packageRelativePath!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a MSIXPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MSIXPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.hostPoolName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'hostPoolName'");
            }
            if ((!args || args.msixPackageFullName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'msixPackageFullName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["hostPoolName"] = args ? args.hostPoolName : undefined;
            inputs["imagePath"] = args ? args.imagePath : undefined;
            inputs["isActive"] = args ? args.isActive : undefined;
            inputs["isRegularRegistration"] = args ? args.isRegularRegistration : undefined;
            inputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            inputs["msixPackageFullName"] = args ? args.msixPackageFullName : undefined;
            inputs["packageApplications"] = args ? args.packageApplications : undefined;
            inputs["packageDependencies"] = args ? args.packageDependencies : undefined;
            inputs["packageFamilyName"] = args ? args.packageFamilyName : undefined;
            inputs["packageName"] = args ? args.packageName : undefined;
            inputs["packageRelativePath"] = args ? args.packageRelativePath : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["displayName"] = undefined /*out*/;
            inputs["imagePath"] = undefined /*out*/;
            inputs["isActive"] = undefined /*out*/;
            inputs["isRegularRegistration"] = undefined /*out*/;
            inputs["lastUpdated"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["packageApplications"] = undefined /*out*/;
            inputs["packageDependencies"] = undefined /*out*/;
            inputs["packageFamilyName"] = undefined /*out*/;
            inputs["packageName"] = undefined /*out*/;
            inputs["packageRelativePath"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:desktopvirtualization/v20200921preview:MSIXPackage" }, { type: "azure-nextgen:desktopvirtualization/v20201019preview:MSIXPackage" }, { type: "azure-nextgen:desktopvirtualization/v20201102preview:MSIXPackage" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(MSIXPackage.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a MSIXPackage resource.
 */
export interface MSIXPackageArgs {
    /**
     * User friendly Name to be displayed in the portal. 
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The name of the host pool within the specified resource group
     */
    readonly hostPoolName: pulumi.Input<string>;
    /**
     * VHD/CIM image path on Network Share.
     */
    readonly imagePath?: pulumi.Input<string>;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    readonly isActive?: pulumi.Input<boolean>;
    /**
     * Specifies how to register Package in feed.
     */
    readonly isRegularRegistration?: pulumi.Input<boolean>;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    readonly lastUpdated?: pulumi.Input<string>;
    /**
     * The version specific package full name of the MSIX package within specified hostpool
     */
    readonly msixPackageFullName: pulumi.Input<string>;
    /**
     * List of package applications. 
     */
    readonly packageApplications?: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.v20201110preview.MsixPackageApplications>[]>;
    /**
     * List of package dependencies. 
     */
    readonly packageDependencies?: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.v20201110preview.MsixPackageDependencies>[]>;
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    readonly packageFamilyName?: pulumi.Input<string>;
    /**
     * Package Name from appxmanifest.xml. 
     */
    readonly packageName?: pulumi.Input<string>;
    /**
     * Relative Path to the package inside the image. 
     */
    readonly packageRelativePath?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    readonly version?: pulumi.Input<string>;
}
