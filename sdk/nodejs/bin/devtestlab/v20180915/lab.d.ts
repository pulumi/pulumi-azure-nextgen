import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A lab.
 */
export declare class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab;
    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Lab;
    /**
     * The properties of any lab announcement associated with this lab
     */
    readonly announcement: pulumi.Output<outputs.devtestlab.v20180915.LabAnnouncementPropertiesResponse | undefined>;
    /**
     * The lab's artifact storage account.
     */
    readonly artifactsStorageAccount: pulumi.Output<string>;
    /**
     * The creation date of the lab.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * The lab's default premium storage account.
     */
    readonly defaultPremiumStorageAccount: pulumi.Output<string>;
    /**
     * The lab's default storage account.
     */
    readonly defaultStorageAccount: pulumi.Output<string>;
    /**
     * The access rights to be granted to the user when provisioning an environment
     */
    readonly environmentPermission: pulumi.Output<string | undefined>;
    /**
     * Extended properties of the lab used for experimental features
     */
    readonly extendedProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
     */
    readonly labStorageType: pulumi.Output<string | undefined>;
    /**
     * The load balancer used to for lab VMs that use shared IP address.
     */
    readonly loadBalancerId: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsLinux: pulumi.Output<string[] | undefined>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsWindows: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
     */
    readonly networkSecurityGroupId: pulumi.Output<string>;
    /**
     * The lab's premium data disk storage account.
     */
    readonly premiumDataDiskStorageAccount: pulumi.Output<string>;
    /**
     * The setting to enable usage of premium data disks.
     * When its value is 'Enabled', creation of standard or premium data disks is allowed.
     * When its value is 'Disabled', only creation of standard data disks is allowed.
     */
    readonly premiumDataDisks: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The public IP address for the lab's load balancer.
     */
    readonly publicIpId: pulumi.Output<string>;
    /**
     * The properties of any lab support message associated with this lab
     */
    readonly support: pulumi.Output<outputs.devtestlab.v20180915.LabSupportPropertiesResponse | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * The lab's Key vault.
     */
    readonly vaultName: pulumi.Output<string>;
    /**
     * The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
     */
    readonly vmCreationResourceGroup: pulumi.Output<string>;
    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The properties of any lab announcement associated with this lab
     */
    readonly announcement?: pulumi.Input<inputs.devtestlab.v20180915.LabAnnouncementProperties>;
    /**
     * The access rights to be granted to the user when provisioning an environment
     */
    readonly environmentPermission?: pulumi.Input<string>;
    /**
     * Extended properties of the lab used for experimental features
     */
    readonly extendedProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
     */
    readonly labStorageType?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsLinux?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsWindows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the lab.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The setting to enable usage of premium data disks.
     * When its value is 'Enabled', creation of standard or premium data disks is allowed.
     * When its value is 'Disabled', only creation of standard data disks is allowed.
     */
    readonly premiumDataDisks?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The properties of any lab support message associated with this lab
     */
    readonly support?: pulumi.Input<inputs.devtestlab.v20180915.LabSupportProperties>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
