import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Virtual machine model
 */
export declare class VirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachine;
    /**
     * Returns true if the given object is an instance of VirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachine;
    /**
     * The amount of memory
     */
    readonly amountOfRam: pulumi.Output<number>;
    /**
     * The list of Virtual Disks' Controllers
     */
    readonly controllers: pulumi.Output<outputs.vmwarecloudsimple.v20190401.VirtualDiskControllerResponse[]>;
    /**
     * Virtual machine properties
     */
    readonly customization: pulumi.Output<outputs.vmwarecloudsimple.v20190401.GuestOSCustomizationResponse | undefined>;
    /**
     * The list of Virtual Disks
     */
    readonly disks: pulumi.Output<outputs.vmwarecloudsimple.v20190401.VirtualDiskResponse[] | undefined>;
    /**
     * The DNS name of Virtual Machine in VCenter
     */
    readonly dnsname: pulumi.Output<string>;
    /**
     * Expose Guest OS or not
     */
    readonly exposeToGuestVM: pulumi.Output<boolean | undefined>;
    /**
     * The path to virtual machine folder in VCenter
     */
    readonly folder: pulumi.Output<string>;
    /**
     * The name of Guest OS
     */
    readonly guestOS: pulumi.Output<string>;
    /**
     * The Guest OS type
     */
    readonly guestOSType: pulumi.Output<string>;
    /**
     * Azure region
     */
    readonly location: pulumi.Output<string>;
    /**
     * {virtualMachineName}
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of Virtual NICs
     */
    readonly nics: pulumi.Output<outputs.vmwarecloudsimple.v20190401.VirtualNicResponse[] | undefined>;
    /**
     * The number of CPU cores
     */
    readonly numberOfCores: pulumi.Output<number>;
    /**
     * Password for login. Deprecated - use customization property
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: pulumi.Output<string>;
    /**
     * The provisioning status of the resource
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The public ip of Virtual Machine
     */
    readonly publicIP: pulumi.Output<string>;
    /**
     * Virtual Machines Resource Pool
     */
    readonly resourcePool: pulumi.Output<outputs.vmwarecloudsimple.v20190401.ResourcePoolResponse | undefined>;
    /**
     * The status of Virtual machine
     */
    readonly status: pulumi.Output<string>;
    /**
     * The list of tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Virtual Machine Template Id
     */
    readonly templateId: pulumi.Output<string | undefined>;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: pulumi.Output<string>;
    /**
     * Username for login. Deprecated - use customization property
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * The list of Virtual VSphere Networks
     */
    readonly vSphereNetworks: pulumi.Output<string[] | undefined>;
    /**
     * The internal id of Virtual Machine in VCenter
     */
    readonly vmId: pulumi.Output<string>;
    /**
     * VMware tools version
     */
    readonly vmwaretools: pulumi.Output<string>;
    /**
     * Create a VirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * The amount of memory
     */
    readonly amountOfRam: pulumi.Input<number>;
    /**
     * Virtual machine properties
     */
    readonly customization?: pulumi.Input<inputs.vmwarecloudsimple.v20190401.GuestOSCustomization>;
    /**
     * The list of Virtual Disks
     */
    readonly disks?: pulumi.Input<pulumi.Input<inputs.vmwarecloudsimple.v20190401.VirtualDisk>[]>;
    /**
     * Expose Guest OS or not
     */
    readonly exposeToGuestVM?: pulumi.Input<boolean>;
    /**
     * Azure region
     */
    readonly location: pulumi.Input<string>;
    /**
     * The list of Virtual NICs
     */
    readonly nics?: pulumi.Input<pulumi.Input<inputs.vmwarecloudsimple.v20190401.VirtualNic>[]>;
    /**
     * The number of CPU cores
     */
    readonly numberOfCores: pulumi.Input<number>;
    /**
     * Password for login. Deprecated - use customization property
     */
    readonly password?: pulumi.Input<string>;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Virtual Machines Resource Pool
     */
    readonly resourcePool?: pulumi.Input<inputs.vmwarecloudsimple.v20190401.ResourcePool>;
    /**
     * The list of tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Virtual Machine Template Id
     */
    readonly templateId?: pulumi.Input<string>;
    /**
     * Username for login. Deprecated - use customization property
     */
    readonly username?: pulumi.Input<string>;
    /**
     * The list of Virtual VSphere Networks
     */
    readonly vSphereNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * virtual machine name
     */
    readonly virtualMachineName: pulumi.Input<string>;
}
