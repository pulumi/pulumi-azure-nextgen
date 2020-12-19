// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20150801
{
    /// <summary>
    /// Represents a web app
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/v20150801:SiteSlot")]
    public partial class SiteSlot : Pulumi.CustomResource
    {
        /// <summary>
        /// Management information availability state for the web app. Possible values are Normal or Limited. 
        ///             Normal means that the site is running correctly and that management information for the site is available. 
        ///             Limited means that only partial management information for the site is available and that detailed site information is unavailable.
        /// </summary>
        [Output("availabilityState")]
        public Output<string> AvailabilityState { get; private set; } = null!;

        /// <summary>
        /// Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
        /// </summary>
        [Output("clientAffinityEnabled")]
        public Output<bool?> ClientAffinityEnabled { get; private set; } = null!;

        /// <summary>
        /// Specifies if the client certificate is enabled for the web app
        /// </summary>
        [Output("clientCertEnabled")]
        public Output<bool?> ClientCertEnabled { get; private set; } = null!;

        /// <summary>
        /// This is only valid for web app creation. If specified, web app is cloned from 
        ///             a source web app
        /// </summary>
        [Output("cloningInfo")]
        public Output<Outputs.CloningInfoResponse?> CloningInfo { get; private set; } = null!;

        /// <summary>
        /// Size of a function container
        /// </summary>
        [Output("containerSize")]
        public Output<int?> ContainerSize { get; private set; } = null!;

        /// <summary>
        /// Default hostname of the web app
        /// </summary>
        [Output("defaultHostName")]
        public Output<string> DefaultHostName { get; private set; } = null!;

        /// <summary>
        /// True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
        /// </summary>
        [Output("enabled")]
        public Output<bool?> Enabled { get; private set; } = null!;

        /// <summary>
        /// Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled
        ///             the app is not served on those hostnames
        /// </summary>
        [Output("enabledHostNames")]
        public Output<ImmutableArray<string>> EnabledHostNames { get; private set; } = null!;

        /// <summary>
        /// Name of gateway app associated with web app
        /// </summary>
        [Output("gatewaySiteName")]
        public Output<string?> GatewaySiteName { get; private set; } = null!;

        /// <summary>
        /// Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
        /// </summary>
        [Output("hostNameSslStates")]
        public Output<ImmutableArray<Outputs.HostNameSslStateResponse>> HostNameSslStates { get; private set; } = null!;

        /// <summary>
        /// Hostnames associated with web app
        /// </summary>
        [Output("hostNames")]
        public Output<ImmutableArray<string>> HostNames { get; private set; } = null!;

        /// <summary>
        /// Specifies if the public hostnames are disabled the web app.
        ///             If set to true the app is only accessible via API Management process
        /// </summary>
        [Output("hostNamesDisabled")]
        public Output<bool?> HostNamesDisabled { get; private set; } = null!;

        /// <summary>
        /// Specification for the hosting environment (App Service Environment) to use for the web app
        /// </summary>
        [Output("hostingEnvironmentProfile")]
        public Output<Outputs.HostingEnvironmentProfileResponse?> HostingEnvironmentProfile { get; private set; } = null!;

        /// <summary>
        /// Site is a default container
        /// </summary>
        [Output("isDefaultContainer")]
        public Output<bool> IsDefaultContainer { get; private set; } = null!;

        /// <summary>
        /// Kind of resource
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Last time web app was modified in UTC
        /// </summary>
        [Output("lastModifiedTimeUtc")]
        public Output<string> LastModifiedTimeUtc { get; private set; } = null!;

        /// <summary>
        /// Resource Location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Maximum number of workers
        ///             This only applies to function container
        /// </summary>
        [Output("maxNumberOfWorkers")]
        public Output<int?> MaxNumberOfWorkers { get; private set; } = null!;

        [Output("microService")]
        public Output<string?> MicroService { get; private set; } = null!;

        /// <summary>
        /// Resource Name
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.
        /// </summary>
        [Output("outboundIpAddresses")]
        public Output<string> OutboundIpAddresses { get; private set; } = null!;

        /// <summary>
        /// If set indicates whether web app is deployed as a premium app
        /// </summary>
        [Output("premiumAppDeployed")]
        public Output<bool> PremiumAppDeployed { get; private set; } = null!;

        /// <summary>
        /// Name of repository site
        /// </summary>
        [Output("repositorySiteName")]
        public Output<string> RepositorySiteName { get; private set; } = null!;

        /// <summary>
        /// Resource group web app belongs to
        /// </summary>
        [Output("resourceGroup")]
        public Output<string> ResourceGroup { get; private set; } = null!;

        /// <summary>
        /// If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
        /// </summary>
        [Output("scmSiteAlsoStopped")]
        public Output<bool?> ScmSiteAlsoStopped { get; private set; } = null!;

        [Output("serverFarmId")]
        public Output<string?> ServerFarmId { get; private set; } = null!;

        /// <summary>
        /// Configuration of web app
        /// </summary>
        [Output("siteConfig")]
        public Output<Outputs.SiteConfigResponse?> SiteConfig { get; private set; } = null!;

        /// <summary>
        /// State of the web app
        /// </summary>
        [Output("state")]
        public Output<string> State { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Read-only property that specifies which slot this app will swap into
        /// </summary>
        [Output("targetSwapSlot")]
        public Output<string> TargetSwapSlot { get; private set; } = null!;

        /// <summary>
        /// Read-only list of Azure Traffic manager hostnames associated with web app
        /// </summary>
        [Output("trafficManagerHostNames")]
        public Output<ImmutableArray<string>> TrafficManagerHostNames { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string?> Type { get; private set; } = null!;

        /// <summary>
        /// State indicating whether web app has exceeded its quota usage
        /// </summary>
        [Output("usageState")]
        public Output<string> UsageState { get; private set; } = null!;


        /// <summary>
        /// Create a SiteSlot resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SiteSlot(string name, SiteSlotArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20150801:SiteSlot", name, args ?? new SiteSlotArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SiteSlot(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20150801:SiteSlot", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160801:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20181101:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20190801:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:SiteSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:SiteSlot"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SiteSlot resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SiteSlot Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SiteSlot(name, id, options);
        }
    }

    public sealed class SiteSlotArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
        /// </summary>
        [Input("clientAffinityEnabled")]
        public Input<bool>? ClientAffinityEnabled { get; set; }

        /// <summary>
        /// Specifies if the client certificate is enabled for the web app
        /// </summary>
        [Input("clientCertEnabled")]
        public Input<bool>? ClientCertEnabled { get; set; }

        /// <summary>
        /// This is only valid for web app creation. If specified, web app is cloned from 
        ///             a source web app
        /// </summary>
        [Input("cloningInfo")]
        public Input<Inputs.CloningInfoArgs>? CloningInfo { get; set; }

        /// <summary>
        /// Size of a function container
        /// </summary>
        [Input("containerSize")]
        public Input<int>? ContainerSize { get; set; }

        /// <summary>
        /// True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// If true, web app hostname is force registered with DNS
        /// </summary>
        [Input("forceDnsRegistration")]
        public Input<string>? ForceDnsRegistration { get; set; }

        /// <summary>
        /// Name of gateway app associated with web app
        /// </summary>
        [Input("gatewaySiteName")]
        public Input<string>? GatewaySiteName { get; set; }

        [Input("hostNameSslStates")]
        private InputList<Inputs.HostNameSslStateArgs>? _hostNameSslStates;

        /// <summary>
        /// Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
        /// </summary>
        public InputList<Inputs.HostNameSslStateArgs> HostNameSslStates
        {
            get => _hostNameSslStates ?? (_hostNameSslStates = new InputList<Inputs.HostNameSslStateArgs>());
            set => _hostNameSslStates = value;
        }

        /// <summary>
        /// Specifies if the public hostnames are disabled the web app.
        ///             If set to true the app is only accessible via API Management process
        /// </summary>
        [Input("hostNamesDisabled")]
        public Input<bool>? HostNamesDisabled { get; set; }

        /// <summary>
        /// Specification for the hosting environment (App Service Environment) to use for the web app
        /// </summary>
        [Input("hostingEnvironmentProfile")]
        public Input<Inputs.HostingEnvironmentProfileArgs>? HostingEnvironmentProfile { get; set; }

        /// <summary>
        /// Resource Id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Kind of resource
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Resource Location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Maximum number of workers
        ///             This only applies to function container
        /// </summary>
        [Input("maxNumberOfWorkers")]
        public Input<int>? MaxNumberOfWorkers { get; set; }

        [Input("microService")]
        public Input<string>? MicroService { get; set; }

        /// <summary>
        /// Resource Name
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
        /// </summary>
        [Input("scmSiteAlsoStopped")]
        public Input<bool>? ScmSiteAlsoStopped { get; set; }

        [Input("serverFarmId")]
        public Input<string>? ServerFarmId { get; set; }

        /// <summary>
        /// Configuration of web app
        /// </summary>
        [Input("siteConfig")]
        public Input<Inputs.SiteConfigArgs>? SiteConfig { get; set; }

        /// <summary>
        /// If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
        /// </summary>
        [Input("skipCustomDomainVerification")]
        public Input<string>? SkipCustomDomainVerification { get; set; }

        /// <summary>
        /// If true web app hostname is not registered with DNS on creation. This parameter is
        ///             only used for app creation
        /// </summary>
        [Input("skipDnsRegistration")]
        public Input<string>? SkipDnsRegistration { get; set; }

        /// <summary>
        /// Name of web app slot. If not specified then will default to production slot.
        /// </summary>
        [Input("slot", required: true)]
        public Input<string> Slot { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Time to live in seconds for web app's default domain name
        /// </summary>
        [Input("ttlInSeconds")]
        public Input<string>? TtlInSeconds { get; set; }

        /// <summary>
        /// Resource type
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public SiteSlotArgs()
        {
        }
    }
}
