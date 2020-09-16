import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a Virtual Machine.
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
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    readonly additionalCapabilities: pulumi.Output<outputs.compute.v20190301.AdditionalCapabilitiesResponse | undefined>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. <br><br>This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
     */
    readonly availabilitySet: pulumi.Output<outputs.compute.v20190301.SubResourceResponse | undefined>;
    /**
     * Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01.
     */
    readonly billingProfile: pulumi.Output<outputs.compute.v20190301.BillingProfileResponse | undefined>;
    /**
     * Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    readonly diagnosticsProfile: pulumi.Output<outputs.compute.v20190301.DiagnosticsProfileResponse | undefined>;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine. Only supported value is 'Deallocate'. <br><br>Minimum api-version: 2019-03-01
     */
    readonly evictionPolicy: pulumi.Output<string | undefined>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    readonly hardwareProfile: pulumi.Output<outputs.compute.v20190301.HardwareProfileResponse | undefined>;
    /**
     * Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01.
     */
    readonly host: pulumi.Output<outputs.compute.v20190301.SubResourceResponse | undefined>;
    /**
     * The identity of the virtual machine, if configured.
     */
    readonly identity: pulumi.Output<outputs.compute.v20190301.VirtualMachineIdentityResponse | undefined>;
    /**
     * The virtual machine instance view.
     */
    readonly instanceView: pulumi.Output<outputs.compute.v20190301.VirtualMachineInstanceViewResponse>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    readonly licenseType: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    readonly networkProfile: pulumi.Output<outputs.compute.v20190301.NetworkProfileResponse | undefined>;
    /**
     * Specifies the operating system settings for the virtual machine.
     */
    readonly osProfile: pulumi.Output<outputs.compute.v20190301.OSProfileResponse | undefined>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan: pulumi.Output<outputs.compute.v20190301.PlanResponse | undefined>;
    /**
     * Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup: pulumi.Output<outputs.compute.v20190301.SubResourceResponse | undefined>;
    /**
     * The virtual machine child extension resources.
     */
    readonly resources: pulumi.Output<outputs.compute.v20190301.VirtualMachineExtensionResponse[]>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    readonly storageProfile: pulumi.Output<outputs.compute.v20190301.StorageProfileResponse | undefined>;
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
     * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01
     */
    readonly virtualMachineScaleSet: pulumi.Output<outputs.compute.v20190301.SubResourceResponse | undefined>;
    /**
     * Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
     */
    readonly vmId: pulumi.Output<string>;
    /**
     * The virtual machine zones.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
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
     * Specifies additional capabilities enabled or disabled on the virtual machine.
     */
    readonly additionalCapabilities?: pulumi.Input<inputs.compute.v20190301.AdditionalCapabilities>;
    /**
     * Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. <br><br>This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
     */
    readonly availabilitySet?: pulumi.Input<inputs.compute.v20190301.SubResource>;
    /**
     * Specifies the billing related details of a Azure Spot virtual machine. <br><br>Minimum api-version: 2019-03-01.
     */
    readonly billingProfile?: pulumi.Input<inputs.compute.v20190301.BillingProfile>;
    /**
     * Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    readonly diagnosticsProfile?: pulumi.Input<inputs.compute.v20190301.DiagnosticsProfile>;
    /**
     * Specifies the eviction policy for the Azure Spot virtual machine. Only supported value is 'Deallocate'. <br><br>Minimum api-version: 2019-03-01
     */
    readonly evictionPolicy?: pulumi.Input<string>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    readonly hardwareProfile?: pulumi.Input<inputs.compute.v20190301.HardwareProfile>;
    /**
     * Specifies information about the dedicated host that the virtual machine resides in. <br><br>Minimum api-version: 2018-10-01.
     */
    readonly host?: pulumi.Input<inputs.compute.v20190301.SubResource>;
    /**
     * The identity of the virtual machine, if configured.
     */
    readonly identity?: pulumi.Input<inputs.compute.v20190301.VirtualMachineIdentity>;
    /**
     * Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
     */
    readonly licenseType?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the network interfaces of the virtual machine.
     */
    readonly networkProfile?: pulumi.Input<inputs.compute.v20190301.NetworkProfile>;
    /**
     * Specifies the operating system settings for the virtual machine.
     */
    readonly osProfile?: pulumi.Input<inputs.compute.v20190301.OSProfile>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan?: pulumi.Input<inputs.compute.v20190301.Plan>;
    /**
     * Specifies the priority for the virtual machine. <br><br>Minimum api-version: 2019-03-01
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup?: pulumi.Input<inputs.compute.v20190301.SubResource>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the storage settings for the virtual machine disks.
     */
    readonly storageProfile?: pulumi.Input<inputs.compute.v20190301.StorageProfile>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. <br><br>This property cannot exist along with a non-null properties.availabilitySet reference. <br><br>Minimum api‐version: 2019‐03‐01
     */
    readonly virtualMachineScaleSet?: pulumi.Input<inputs.compute.v20190301.SubResource>;
    /**
     * The name of the virtual machine.
     */
    readonly vmName: pulumi.Input<string>;
    /**
     * The virtual machine zones.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
