import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A single API Management service resource in List or Get response.
 */
export declare class ApiManagementService extends pulumi.CustomResource {
    /**
     * Get an existing ApiManagementService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiManagementService;
    /**
     * Returns true if the given object is an instance of ApiManagementService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiManagementService;
    /**
     * Additional datacenter locations of the API Management service.
     */
    readonly additionalLocations: pulumi.Output<outputs.apimanagement.v20170301.AdditionalLocationResponse[] | undefined>;
    /**
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    readonly certificates: pulumi.Output<outputs.apimanagement.v20170301.CertificateConfigurationResponse[] | undefined>;
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdAtUtc: pulumi.Output<string>;
    /**
     * Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
     */
    readonly customProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * ETag of the resource.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Gateway URL of the API Management service in the Default Region.
     */
    readonly gatewayRegionalUrl: pulumi.Output<string>;
    /**
     * Gateway URL of the API Management service.
     */
    readonly gatewayUrl: pulumi.Output<string>;
    /**
     * Custom hostname configuration of the API Management service.
     */
    readonly hostnameConfigurations: pulumi.Output<outputs.apimanagement.v20170301.HostnameConfigurationResponse[] | undefined>;
    /**
     * Managed service identity of the Api Management service.
     */
    readonly identity: pulumi.Output<outputs.apimanagement.v20170301.ApiManagementServiceIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Management API endpoint URL of the API Management service.
     */
    readonly managementApiUrl: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Email address from which the notification will be sent.
     */
    readonly notificationSenderEmail: pulumi.Output<string | undefined>;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    readonly portalUrl: pulumi.Output<string>;
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Publisher email.
     */
    readonly publisherEmail: pulumi.Output<string>;
    /**
     * Publisher name.
     */
    readonly publisherName: pulumi.Output<string>;
    /**
     * SCM endpoint URL of the API Management service.
     */
    readonly scmUrl: pulumi.Output<string>;
    /**
     * SKU properties of the API Management service.
     */
    readonly sku: pulumi.Output<outputs.apimanagement.v20170301.ApiManagementServiceSkuPropertiesResponse>;
    /**
     * Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
     */
    readonly staticIps: pulumi.Output<string[]>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
     */
    readonly targetProvisioningState: pulumi.Output<string>;
    /**
     * Resource type for API Management resource is set to Microsoft.ApiManagement.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Virtual network configuration of the API Management service.
     */
    readonly virtualNetworkConfiguration: pulumi.Output<outputs.apimanagement.v20170301.VirtualNetworkConfigurationResponse | undefined>;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    readonly virtualNetworkType: pulumi.Output<string | undefined>;
    /**
     * Create a ApiManagementService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiManagementServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiManagementService resource.
 */
export interface ApiManagementServiceArgs {
    /**
     * Additional datacenter locations of the API Management service.
     */
    readonly additionalLocations?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20170301.AdditionalLocation>[]>;
    /**
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    readonly certificates?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20170301.CertificateConfiguration>[]>;
    /**
     * Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
     */
    readonly customProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Custom hostname configuration of the API Management service.
     */
    readonly hostnameConfigurations?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20170301.HostnameConfiguration>[]>;
    /**
     * Managed service identity of the Api Management service.
     */
    readonly identity?: pulumi.Input<inputs.apimanagement.v20170301.ApiManagementServiceIdentity>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Email address from which the notification will be sent.
     */
    readonly notificationSenderEmail?: pulumi.Input<string>;
    /**
     * Publisher email.
     */
    readonly publisherEmail: pulumi.Input<string>;
    /**
     * Publisher name.
     */
    readonly publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * SKU properties of the API Management service.
     */
    readonly sku: pulumi.Input<inputs.apimanagement.v20170301.ApiManagementServiceSkuProperties>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Virtual network configuration of the API Management service.
     */
    readonly virtualNetworkConfiguration?: pulumi.Input<inputs.apimanagement.v20170301.VirtualNetworkConfiguration>;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    readonly virtualNetworkType?: pulumi.Input<string>;
}
