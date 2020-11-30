// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Marketplace.V20200101
{
    /// <summary>
    /// The privateStore offer data structure.
    /// </summary>
    public partial class PrivateStoreOffer : Pulumi.CustomResource
    {
        /// <summary>
        /// Private store offer creation date
        /// </summary>
        [Output("createdAt")]
        public Output<string> CreatedAt { get; private set; } = null!;

        /// <summary>
        /// Identifier for purposes of race condition
        /// </summary>
        [Output("eTag")]
        public Output<string?> ETag { get; private set; } = null!;

        /// <summary>
        /// Icon File Uris
        /// </summary>
        [Output("iconFileUris")]
        public Output<ImmutableDictionary<string, string>?> IconFileUris { get; private set; } = null!;

        /// <summary>
        /// Private store offer modification date
        /// </summary>
        [Output("modifiedAt")]
        public Output<string> ModifiedAt { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// It will be displayed prominently in the marketplace
        /// </summary>
        [Output("offerDisplayName")]
        public Output<string> OfferDisplayName { get; private set; } = null!;

        /// <summary>
        /// Offer plans
        /// </summary>
        [Output("plans")]
        public Output<ImmutableArray<Outputs.PlanResponse>> Plans { get; private set; } = null!;

        /// <summary>
        /// Private store unique id
        /// </summary>
        [Output("privateStoreId")]
        public Output<string> PrivateStoreId { get; private set; } = null!;

        /// <summary>
        /// Publisher name that will be displayed prominently in the marketplace
        /// </summary>
        [Output("publisherDisplayName")]
        public Output<string> PublisherDisplayName { get; private set; } = null!;

        /// <summary>
        /// Plan ids limitation for this offer
        /// </summary>
        [Output("specificPlanIdsLimitation")]
        public Output<ImmutableArray<string>> SpecificPlanIdsLimitation { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Offers unique id
        /// </summary>
        [Output("uniqueOfferId")]
        public Output<string> UniqueOfferId { get; private set; } = null!;

        /// <summary>
        /// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
        /// </summary>
        [Output("updateSuppressedDueIdempotence")]
        public Output<bool?> UpdateSuppressedDueIdempotence { get; private set; } = null!;


        /// <summary>
        /// Create a PrivateStoreOffer resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrivateStoreOffer(string name, PrivateStoreOfferArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:marketplace/v20200101:PrivateStoreOffer", name, args ?? new PrivateStoreOfferArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrivateStoreOffer(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:marketplace/v20200101:PrivateStoreOffer", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:marketplace/latest:PrivateStoreOffer"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrivateStoreOffer resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrivateStoreOffer Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PrivateStoreOffer(name, id, options);
        }
    }

    public sealed class PrivateStoreOfferArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Identifier for purposes of race condition
        /// </summary>
        [Input("eTag")]
        public Input<string>? ETag { get; set; }

        [Input("iconFileUris")]
        private InputMap<string>? _iconFileUris;

        /// <summary>
        /// Icon File Uris
        /// </summary>
        public InputMap<string> IconFileUris
        {
            get => _iconFileUris ?? (_iconFileUris = new InputMap<string>());
            set => _iconFileUris = value;
        }

        /// <summary>
        /// The offer ID to update or delete
        /// </summary>
        [Input("offerId", required: true)]
        public Input<string> OfferId { get; set; } = null!;

        [Input("plans")]
        private InputList<Inputs.PlanArgs>? _plans;

        /// <summary>
        /// Offer plans
        /// </summary>
        public InputList<Inputs.PlanArgs> Plans
        {
            get => _plans ?? (_plans = new InputList<Inputs.PlanArgs>());
            set => _plans = value;
        }

        /// <summary>
        /// The store ID - must use the tenant ID
        /// </summary>
        [Input("privateStoreId", required: true)]
        public Input<string> PrivateStoreId { get; set; } = null!;

        [Input("specificPlanIdsLimitation")]
        private InputList<string>? _specificPlanIdsLimitation;

        /// <summary>
        /// Plan ids limitation for this offer
        /// </summary>
        public InputList<string> SpecificPlanIdsLimitation
        {
            get => _specificPlanIdsLimitation ?? (_specificPlanIdsLimitation = new InputList<string>());
            set => _specificPlanIdsLimitation = value;
        }

        /// <summary>
        /// Indicating whether the offer was not updated to db (true = not updated). If the allow list is identical to the existed one in db, the offer would not be updated.
        /// </summary>
        [Input("updateSuppressedDueIdempotence")]
        public Input<bool>? UpdateSuppressedDueIdempotence { get; set; }

        public PrivateStoreOfferArgs()
        {
        }
    }
}
