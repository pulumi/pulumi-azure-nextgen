// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class GetWebAppPremierAddOnSlot
    {
        public static Task<GetWebAppPremierAddOnSlotResult> InvokeAsync(GetWebAppPremierAddOnSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppPremierAddOnSlotResult>("azure-nextgen:web/v20200901:getWebAppPremierAddOnSlot", args ?? new GetWebAppPremierAddOnSlotArgs(), options.WithVersion());
    }


    public sealed class GetWebAppPremierAddOnSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Add-on name.
        /// </summary>
        [Input("premierAddOnName", required: true)]
        public string PremierAddOnName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public GetWebAppPremierAddOnSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppPremierAddOnSlotResult
    {
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Premier add on Marketplace offer.
        /// </summary>
        public readonly string? MarketplaceOffer;
        /// <summary>
        /// Premier add on Marketplace publisher.
        /// </summary>
        public readonly string? MarketplacePublisher;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Premier add on Product.
        /// </summary>
        public readonly string? Product;
        /// <summary>
        /// Premier add on SKU.
        /// </summary>
        public readonly string? Sku;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Premier add on Vendor.
        /// </summary>
        public readonly string? Vendor;

        [OutputConstructor]
        private GetWebAppPremierAddOnSlotResult(
            string id,

            string? kind,

            string location,

            string? marketplaceOffer,

            string? marketplacePublisher,

            string name,

            string? product,

            string? sku,

            Outputs.SystemDataResponse systemData,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? vendor)
        {
            Id = id;
            Kind = kind;
            Location = location;
            MarketplaceOffer = marketplaceOffer;
            MarketplacePublisher = marketplacePublisher;
            Name = name;
            Product = product;
            Sku = sku;
            SystemData = systemData;
            Tags = tags;
            Type = type;
            Vendor = vendor;
        }
    }
}
